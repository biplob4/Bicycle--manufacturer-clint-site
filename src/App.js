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

        <Route path="dashboard" element={<Dashbord />}>
          {/* <Route index element={<MyAppoinment />}></Route>
          <Route path="review" element={<MyReview />}></Route>
          <Route path="history" element={<History />}></Route>
          <Route path="payment/:id" element={<Payment />}></Route>
          <Route path="users" element={<RequireAdmin><Users /></RequireAdmin>}></Route>
          <Route path="addDoctor" element={<RequireAdmin><AddDoctor /></RequireAdmin>}></Route>
          <Route path="manageDoctor" element={<RequireAdmin><ManageDoctor /></RequireAdmin>}></Route> */}
        </Route>

      </Routes>
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;
