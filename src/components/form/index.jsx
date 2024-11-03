import styles from './form.module.css';
import { useSelector, shallowEqual } from 'react-redux';
import { useNavigate } from 'react-router';
import Arrow from '../../images/arrow.svg';
import { InputMask } from 'primereact/inputmask';
import { useFormWithValidation } from '../../hooks/validation';
import { sendData } from '../../utils/api';
import { useState } from 'react';

const Form = () => {
    const navigate = useNavigate();
    const [isPayed, setPayed] = useState(false);

    const { currentProduct } = useSelector((store) => ({
        currentProduct: store.currentProduct.product
    }), shallowEqual);

    const {  values, handleChange, errors, formRef, isValid } = useFormWithValidation({ClientName: '', Phone: '', Email: '' });

    function handleBackButtonClick() {
        navigate('/');
    };

    function handleSubmit(e) {
        e.preventDefault();
        if(isValid) {
            sendData(values, currentProduct)
                .then(res => setPayed(true))
                .catch(err => console.log(err))
        }
    };

    return (
        <>
            {currentProduct && !isPayed &&
            <section className={ styles.formSection }>
                <h2 className={ styles.title }>
                    { currentProduct.NAME }
                </h2>    
                <form className={ styles.form } noValidate ref={formRef} onSubmit={handleSubmit}>
                    <div className={ styles.inputContainer }>
                        <label htmlFor="ClientName">Имя *</label>
                        <input type='text' id="ClientName" name='ClientName'
                            required maxLength={20} minLength={3}
                            onChange={ (e) => handleChange(e) }
                            className={ `${styles.input} ${errors.ClientName && styles.errorInput}` }
                        />
                        <p className={ styles.errorMessage }>
                            {errors.ClientName && errors.ClientName}
                        </p>
                    </div>
                    <div className={ styles.inputContainer }>
                        <label htmlFor="Phone">Номер телефона *</label>
                        <InputMask id="Phone"  placeholder='+7 (___) ___-__-__' name='Phone' type='tel'
                            mask="+7 (999) 999-99-99"
                            onChange={ (e) => handleChange(e) }
                            required
                            className={ `${styles.input} ` }
                        />
                        <p className={ styles.errorMessage }>
                            {errors.Phone && errors.Phone}
                        </p>
                    </div>
                    <div className={ styles.inputContainer }>
                        <label htmlFor="Email">Почта *</label>
                        <input type='email' id="Email" name='Email'
                            required maxLength={40}
                            onChange={ handleChange }
                            className={ `${styles.input} ${errors.Email && styles.errorInput}` }
                        />
                        <p className={ styles.errorMessage }>
                            {errors.Email && errors.Email}
                        </p>
                    </div>
                    <div className={ styles.container }>
                        <button className={ `${styles.button} ${styles.backButton}`} onClick={ handleBackButtonClick }>
                            <img 
                                src={ Arrow }
                            />    
                            <p className={ styles.buttonText }>
                                На главную
                            </p>
                        </button>
                        <button type='submit' className={ `${styles.button} ${styles.payButton}  ${!isValid && styles.errorButton}`}>
                            <p className={ styles.buttonText }>
                                Оплатить
                            </p>
                        </button>
                    </div>
                </form>
            </section>}
            {isPayed && <p>Заказ успешно создан</p>}
        </>
    )
};

export default Form;