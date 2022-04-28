
import Home from './routes/home/Home';
import Navigation from './components/navigation/navigation';
import Authentication from './components/authentication/auth';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="shop" element={<Navigation />} />
        <Route path="auth" element={<Authentication />} />

      </Route>
    </Routes>
  )
}

export default App;
