import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Main } from './pages/main/Main';
import { OrderForm } from './pages/order-form/OrderForm';
import { Category } from './pages/category/Category';

function App() {
    return (
        <>
            <Routes>
                <Route index element={<Main />} />
                <Route path="order-form" element={<OrderForm />} />
                <Route path="category/:id" element={<Category />} />
            </Routes>
        </>
    );
}

export default App;
