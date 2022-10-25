import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Category.module.scss';

export const Category = (): ReactElement => {
    return (
        <div>
            Категория
            <NavLink to="/order-form">Заказать</NavLink>
        </div>
    );
};
