
import Home from './routes/home/Home';
import Navigation from './routes/navigation/navigation';
import Authentication from './routes/authentication/auth';
import Shop from './routes/shop/shop-comp'
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />

      </Route>
    </Routes>
  )
}

export default App;
