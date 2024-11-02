import styles from './header.module.css';

const Header = () => {
    return (
        <header className={ styles.header }>
            <div className={ styles.wrapper }>
                <h1 className={ styles.title }>Sycret</h1>
            </div>
        </header>
    )
};

export default Header;