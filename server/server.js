import express from 'express';
import fs from 'fs';
import path from 'path';

import React from 'react';
import App from '../src/App';
import * as ReactDOMServer from 'react-dom/server';

const app = express();

app.use('^/$', (req, res, next) => {
    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send('err');
        }

        return res.send(
            data.replace(
                '<div id="root"></div>',
                `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`,
            ),
        );
    });
});

app.listen(3000, () => {
    console.log('Listen 3000');
});
