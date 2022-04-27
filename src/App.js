
import Home from './routes/home/Home';
import Navigation from './components/navigation/navigation';
import SignIn from './components/sign/signIn';
import { Route, Routes, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="shop" element={<Navigation />} />
        <Route path="sign-in" element={<SignIn />} />

      </Route>
    </Routes>
  )
}

export default App;
