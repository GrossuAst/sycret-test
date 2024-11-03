import styles from './header.module.css';
import { useNavigate } from 'react-router';

const Header = () => {
    const navigate = useNavigate();

    function handleLogoClick() {
        navigate('/');
    };

    return (
        <header className={ styles.header }>
            <div className={ styles.wrapper }>
                <h1 onClick={ handleLogoClick } className={ styles.title }>Sycret</h1>
            </div>
        </header>
    )
};

export default Header;