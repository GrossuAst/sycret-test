import styles from './product-page.module.css';
import Main from '../../components/main';
import Form from '../../components/form';
import Preloader from '../../components/preloader';
import NoData from '../../components/no-data';
import { useSelector, shallowEqual } from 'react-redux';

const ProductPage = () => {
    const { isLoading, currentProduct } = useSelector((store) => ({
        isLoading: store.products.feedRequest,
        currentProduct: store.currentProduct.product
    }), shallowEqual);

    return (
        <Main>
            {isLoading && <Preloader />}
            {!isLoading && currentProduct !== null ? (
                <Form />
            ) : (
                !isLoading && currentProduct === null && <NoData />
            )}
        </Main>
    )
};

export default ProductPage;