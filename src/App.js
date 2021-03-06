import Navber from './Pages/Home/Navber';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Blogs from './Pages/Blogs/Blogs';
import Purchase from './Purchase/Purchase';
import { ToastContainer } from 'react-toastify';
import Footer from './Pages/Shared/Footer';
import Login from './Pages/Shared/Login/Login';
import SignIn from './Pages/Shared/SignIn/SignIn';
import Dashbord from './Pages/Dashbord/Dashbord';
import MyOrder from './Pages/MyOrder/MyOrder';
import Paymant from './Pages/Payment/Paymant';
import AddRevie from './Pages/AddReview/AddRevie';
import RequireAuth from './Pages/Shared/RequireAuth';
import ManageOrder from './Pages/ManageOrder/ManageOrder';
import RequireAdmin from './Pages/Shared/RequireAdmin';
import AddProduct from './Pages/AddProduct/AddProduct';
import MakeAdmin from './Pages/MakeAdmin/MakeAdmin';
import Profile from './Pages/Profile/Profile';
import Question from './Pages/question/Question';
import About from './Pages/About/About';
import ManageProduct from './Pages/ManageProduct/ManageProduct';

function App() {
  return (
    <div>
      <Navber />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/blogs' element={<Question />}></Route>
        <Route path='/purchase/:id' element={<Purchase />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path="payment/:id" element={<Paymant />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/protfolio' element={<About />}></Route>

        <Route path="dashboard" element={<RequireAuth><Dashbord /></RequireAuth>}>
          <Route index element={<MyOrder />}></Route>
          <Route path="addReview" element={<AddRevie />}></Route>
          <Route path="manageOrder" element={<RequireAdmin><ManageOrder /></RequireAdmin>}></Route>
          <Route path="addProduct" element={<RequireAdmin><AddProduct /></RequireAdmin>}></Route>
          <Route path="makeAdmin" element={<RequireAdmin><MakeAdmin /></RequireAdmin>}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="manageProduct" element={<RequireAdmin><ManageProduct /></RequireAdmin>}></Route>
        </Route>

      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
