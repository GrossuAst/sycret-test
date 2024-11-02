import styles from './form.module.css';
import { useSelector, shallowEqual } from 'react-redux';
import { useNavigate } from 'react-router';
import Arrow from '../../images/arrow.svg';

const Form = () => {
    const navigate = useNavigate();

    const { currentProduct } = useSelector((store) => ({
        currentProduct: store.currentProduct.product
    }), shallowEqual);

    function handleBackButtonClick() {
        navigate('/');
    };

    return (
        currentProduct &&
        <section className={ styles.formSection }>
            <h2 className={ styles.title }>
                { currentProduct.NAME }
            </h2>    
            <form className={ styles.form }>
                
            </form>
            <div className={ styles.container }>
                <button className={ styles.button } onClick={ handleBackButtonClick }>
                    <img 
                        src={ Arrow }
                    />    
                    <p className={ styles.buttonText }>
                        На главную
                    </p>
                </button>
                <button className={ styles.button }>
                    <p className={ styles.buttonText }>
                        Оплатить
                    </p>
                </button>
            </div>
        </section>
    )
};

export default Form;