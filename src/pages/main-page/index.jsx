import styles from './main-page.module.css';
import Main from '../../components/main';
import ProductList from '../../components/product-list';
import Menu from '../../components/menu';
import Preloader from '../../components/preloader';
import { useSelector, shallowEqual } from 'react-redux';

const MainPage = () => {
    const { isLoading } = useSelector((store) => ({
        isLoading: store.products.feedRequest
    }), shallowEqual);

    return (
        <Main>
            {
                !isLoading ? 
                ( 
                <>
                    <Menu />
                    <ProductList />    
                </>
                ) : 
                <Preloader />
            }

        </Main>
    )
};

export default MainPage;