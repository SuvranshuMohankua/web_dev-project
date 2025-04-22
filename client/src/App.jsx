import {Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import EmailVerify from './pages/EmailVerify'
import ResetPassword from './pages/ResetPassword'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"; 
import Login from './pages/Loginpage/Login';
import BookClass from './pages/Bookclass';

const App = () => {
  return (
    <div className="">
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/email-verify" element={<EmailVerify/>}/>
        <Route path="/reset-password" element={<ResetPassword/>}/>
        <Route path="/book-class" element={<BookClass/>}/>
      </Routes>
    </div>
  )
}

export default App
