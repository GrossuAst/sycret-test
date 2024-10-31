import './App.css';
import { Route, Routes } from 'react-router';

import MainPage from './pages/main-page';
import ProductPage from './pages/product-page';
import NotFoundPage from './pages/not-found-page';

import { useEffect } from 'react';
import { getInitialData } from './utils/api';

function App() {
  useEffect(() => {
    getInitialData()
      .then((res) => {
        console.log(res)
      })
      .catch(() => {

      })
  });

  return (
    <Routes>
      <Route path='/' element={ <MainPage /> }/>
      <Route path=':id' element={ <ProductPage /> } />
      <Route path='*' element={ <NotFoundPage/> } />
    </Routes>
  );
}

export default App;
