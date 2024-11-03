import styles from './app.module.css';

import { Route, Routes } from 'react-router';

import MainPage from '../../pages/main-page';
import ProductPage from '../../pages/product-page';
import NotFoundPage from '../../pages/not-found-page';
import PayPage from '../../pages/pay-page';
import Header from '../header';
import Footer from '../footer';

function App() {
  return (
    <div className={ styles.content }>
      <Header />
      <Routes>
        <Route path='/' element={ <MainPage /> }/>
        <Route path=':id' element={ <ProductPage /> } />
        <Route path='/pay' element={ <PayPage /> } />
        <Route path='*' element={ <NotFoundPage /> } />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
