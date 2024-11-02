import styles from './main.module.css';
import { getInitialData } from '../../services/product-list/action';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getCurrentProduct } from '../../services/current-product/action';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const Main = ({children}) => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const { data, currentProduct } = useSelector((store) => ({
        data: store.products.data,
        currentProduct: store.currentProduct.product
    }), shallowEqual);

    useEffect(() => {
        data.length === 0 && dispatch(getInitialData());
    }, []);

    useEffect(() => {
        if(id && data && !currentProduct) {
            const product = data.find(item => item.ID === id);
            product && dispatch(getCurrentProduct(product));
        }
    }, [id, data]);

    return (
        <main className={ styles.main }>
            <section className={ styles.wrapper }>
                {children}    
            </section>
        </main>
    )
};

export default Main;