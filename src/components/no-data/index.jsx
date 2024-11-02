import styles from './no-data.module.css';
import { useSelector, shallowEqual } from 'react-redux';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';

const NoData = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { currentProduct } = useSelector((store) => ({
        currentProduct: store.currentProduct.product
    }), shallowEqual);

    function handleButtonClick() {
        navigate('/');
    };
    
    return (
        <div className={ styles.container }>
            { !currentProduct && id && <p>Такого сертификата не существует</p> }
            { !currentProduct && !id && <p>Такой страницы не существует</p> }
            <button onClick={ handleButtonClick } className={ styles.button }>На главную</button>
        </div>
    )
};

export default NoData;