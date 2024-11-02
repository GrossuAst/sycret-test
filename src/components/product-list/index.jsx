import styles from './product-list.module.css';
import Product from '../product';

import { useSelector, shallowEqual } from 'react-redux';

const ProductList = () => {
    const { data } = useSelector((store) => ({
        data: store.products.data,
    }), shallowEqual);
    console.log(data)

    return (
        <div className={ styles.contentContainer }>
            <h2 className={ styles.title }>
                Доступные сертификаты
                <span className={ styles.subtitle }>{` (Всего ${data.length})`}</span>
            </h2>
            <ul className={ styles.productList }>
                {
                    data.map((item) => (
                        <li className={ styles.listItem } key={ item.ID }>
                            <Product 
                                // для использования
                                id={ item.ID }
                                name={ item.NAME }
                                description={ item.DESCRIPTION }
                                price={ item.PRICE }
                                priceToPay={ item.SUMMA }
                                discount={ item.DISCOUNT }
                                
                                // для передачи
                                tableName={ item.TABLENAME}
                                primaryKey={ item.PRIMARYKEY }

                            />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};

export default ProductList;