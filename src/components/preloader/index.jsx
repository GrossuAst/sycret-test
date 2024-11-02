import styles from './preloader.module.css';

function Preloader() {
    return (
        <div className={ styles.container }>
            <div className={ styles.loader } />
        </div>
    )
};

export default Preloader;