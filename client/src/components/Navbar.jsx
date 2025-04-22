import { useNavigate } from "react-router-dom"
import { assets } from "../assets/assets"
import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import axios from "axios"
import { toast } from "react-toastify"


const Navbar = () => {

    const navigate = useNavigate()
    const {userData,backendUrl,setUserData,setIsLoggedin} = useContext(AppContext)

    const sendVerificationOtp = async()=>{
      try{

        axios.defaults.withCredentials = true

        const {data} = await axios.post(backendUrl+'/api/auth/send-verify-otp')

        if(data.success){
          navigate('/email-verify')
          toast.success(data.message)
        }else{
          toast.error(data.message)
        }

      }catch(error){
        toast.error(error.message)
      }
    }

    const logout = async ()=>{
      try{
        axios.defaults.withCredentials = true 
        const {data} = await axios.post(backendUrl + '/api/auth/logout')
        data.success && setIsLoggedin(false)
        data.success && setUserData(false)
        navigate('/')

      }catch(error){
        toast.error(error.message)
      }
    }

  return (
    
    <nav>
    <div className="nav-logo">
      <a href="#"><img src={assets.logo1} alt="logo" /></a>
    </div>
    <ul className="nav__links">
      <li className="link"><a href="#">Home</a></li>
      <li className="link"><a href="#">Program</a></li>
      <li className="link"><a href="#">Service</a></li>
      <li className="link"><a href="#">About</a></li>
      <li className="link"><a href="#">Community</a></li>
    </ul>
    {userData ?
        <div className="w-12 h-12 flex justify-center items-center rounded-full bg-white text-black relative group font-bold text-2xl">
          {userData.name[0].toUpperCase()}
          <div className="absolute hidden group-hover:block top-12 right-0 z-30 text-black rounded pt-10">
            <ul className=" list-none m-0 p-2 bg-gray-100 text-sm">
              {!userData.isAccountVerified && <li className="btn py-1 px-2 hover:bg-gray-200 cursor-pointer" onClick={sendVerificationOtp}>Verify email</li>}
              <li onClick={logout} className="btn py-1 px-2 hover:bg-gray-200 cursor-pointer pr-10">Logout</li>
            </ul>
        </div>
        </div>
      :
        <button onClick={()=>navigate("/login")}
        className="btn flex items-center gap-2 border border-gray-500 rounded-full px-6 py-2 text-gray-800 hover:bg-gray-100 transition-all">
          Join Now</button>
      }
    
    
  </nav>
  )
}

export default Navbar
