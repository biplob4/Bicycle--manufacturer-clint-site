import logo from './logo.svg';
import './App.css';
import Navber from './Pages/Home/Navber';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Blogs from './Pages/Blogs/Blogs';

function App() {
  return (
    <div>
      <Navber />
      <Home />
      <Routes>
        <Route path='/blogs' element={<Blogs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
