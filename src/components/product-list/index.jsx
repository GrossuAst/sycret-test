import styles from './product-list.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Product from '../product';
import { getInitialData } from '../../services/product-list/action';

const ProductList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInitialData());
    }, []);

    return (
        <ul className={ styles.productList }>
            <li className={ styles.listItem }>asd</li>
        </ul>
    )
};

export default ProductList;