import { Route, Routes } from 'react-router-dom';
import { Nike } from './pages/Nike/Nike';
import { Adidas } from './pages/Adidas/Adidas';
import { Newbalance } from './pages/Newbalance/Newbalance';
import { Reebok } from './pages/Reebok/Reebok';
import { Product } from './pages/Product/Product';
import { Home } from './pages/Home/Home';
import { Others } from './pages/Others/Others';
import { ScrollTop } from './ui/ScrollTop/ScrollTop'
import { Cart } from './pages/Cart/Cart';
import './App.scss'
import { Favorite } from './pages/Favorite/Favorite';

function App() {

  return (
    <>
      <ScrollTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nike' element={<Nike />} />
        <Route path='/adidas' element={<Adidas />} />
        <Route path='/newbalance' element={<Newbalance />} />
        <Route path='/reebok' element={<Reebok />} />
        <Route path='/others' element={<Others />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/favorite' element={<Favorite />} />
      </Routes>
    </>
  )
}

export default App;
