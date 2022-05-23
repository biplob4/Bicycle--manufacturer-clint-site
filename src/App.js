import Navber from './Pages/Home/Navber';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Blogs from './Pages/Blogs/Blogs';
import Purchase from './Purchase/Purchase';
import { ToastContainer } from 'react-toastify';
import Footer from './Pages/Shared/Footer';
import Login from './Pages/Shared/Login/Login';
import SignIn from './Pages/Shared/SignIn/SignIn';

function App() {
  return (
    <div>
      <Navber />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/purchase/:id' element={<Purchase />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
      </Routes>
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;
