import styles from './main.module.css';
import { getInitialData } from '../../services/product-list/action';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useEffect } from 'react';

const Main = ({children}) => {
    const dispatch = useDispatch();

    const { data } = useSelector((store) => ({
        data: store.products.data,
    }), shallowEqual);

    useEffect(() => {
        data.length === 0 && dispatch(getInitialData());
    }, []);

    return (
        <main className={ styles.main }>
            <section className={ styles.wrapper }>
                {children}    
            </section>
        </main>
    )
};

export default Main;