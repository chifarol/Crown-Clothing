
import Home from './routes/home/Home';
import Navigation from './routes/navigation/navigation';
import Authentication from './routes/authentication/auth';
import Shop from './routes/shop/shop-comp'
import Checkout from './routes/checkout/checkout';
import ProductCategory from './components/productCategory/product-category';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="shop/*" element={<Shop />}>
          {/* <Route path='hats' element={<ProductCategory category='hats' />} />
          <Route path='jackets' element={<ProductCategory category='jackets' />} />
          <Route path='men' element={<ProductCategory category='men' />} />
          <Route path='sneakers' element={<ProductCategory category='sneakers' />} />
          <Route path='women' element={<ProductCategory category='women' />} /> */}

        </Route>
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />

      </Route>
    </Routes>
  )
}

export default App;
