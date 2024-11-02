import styles from './product.module.css';
import { Link } from 'react-router-dom';

const Product = ({id, name, description, price, priceToPay, discount, tableName, primaryKey}) => {
    function formatData(data) {
        const formattedData = Math.floor(parseFloat(data));
        return formattedData.toString();
    };

    return (
        <Link to={ `${'product' + id}`} className={ styles.link }>
            <article className={ styles.product }>
                <div className={ styles.id }>
                    {id}
                </div>
                <div className={ styles.about }>
                    <h3 className={ styles.name }>
                        {name}
                    </h3>
                    {/* <p className={ styles.description }>
                        { !description && 'Описание отсутствует' }    
                    </p>     */}
                </div>
                <div className={ styles.priceContainer }>
                    <div className={ styles.discountContainer }>
                        <p className={`${styles.fullPrice} ${discount && styles.strikethrough}`}>
                            Старая цена: {formatData(price)} руб
                        </p>
                        { discount && <p className={ styles.discount }>cкидка {formatData(discount)}%</p> }    
                    </div>
                    <p className={ styles.totalPrice }>
                        итого: { formatData(priceToPay) } руб
                    </p>
                </div>
                <button className={ styles.button }>
                    Купить
                </button>
            </article>
        </Link>
    )
};

export default Product;