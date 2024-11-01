import styles from './main.module.css';

const Main = ({children}) => {
    return (
        <main className={ styles.main }>
            <section className={ styles.wrapper }>
                {children}    
            </section>
        </main>
    )
};

export default Main;