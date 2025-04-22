/* eslint-disable no-unused-vars */
import { use, useContext, useState } from "react"
import { assets } from "../../assets/assets"
import { data, useNavigate } from "react-router-dom"
import { AppContext } from "../../context/AppContext"
import axios from "axios"
import { toast } from "react-toastify"
import './index.css'

const Login = () => {

    const navigate = useNavigate()

    const {backendUrl,setIsLoggedin,getUserData} = useContext(AppContext)

    const [state,setState]=useState('Sign Up')
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const onSubmitHandle = async(e)=>{
        
        try{
            e.preventDefault()

            axios.defaults.withCredentials = true
            
            if(state === "Sign Up"){
               const {data} =  await axios.post(backendUrl + "/api/auth/register", 
                    {name,email,password}
                )
                
                if (data.success){
                    setIsLoggedin(true)
                    getUserData()
                    navigate("/")
                }else{
                    
                    toast.error(data.message)
                }
            }else{
                
                const {data} =  await axios.post(backendUrl + "/api/auth/login", 
                    {email,password}
                )
                console.log(data)
                if (data.success){
                    setIsLoggedin(true)
                    getUserData()
                    navigate("/")
                }else{
                    console.log("error1")
                    toast.error(data.message)
                }
            }
        }catch(error){
            toast.error(data.message)
        }
    }

  return (
    

    <div className="auth-container">
      <img onClick={() => navigate("/")} src={assets.logo1} alt="" className="logo" />
      <div className="auth-box">
        <h2 className="auth-title">{state === "Sign Up" ? 'Create Account' : "Login"}</h2>
        <p className="auth-subtitle">{state === "Sign Up" ? 'Create Your Account' : "Login to your Account"}</p>

        <form onSubmit={onSubmitHandle}>
          {state === "Sign Up" && (
            <div className="input-group">
              <img src={assets.person_icon} alt="" />
              <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Full Name" required />
            </div>
          )}

          <div className="input-group">
            <img src={assets.mail_icon} alt="" />
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email id" required />
          </div>

          <div className="input-group">
            <img src={assets.lock_icon} alt="" />
            <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" required />
          </div>

          <p className="forgot-password" onClick={() => navigate("/reset-password")}>Forgot Password</p>

          <button className="auth-button">{state}</button>
        </form>

        {state === "Sign Up" ? (
          <p className="switch-auth">Already have an Account?{' '}
            <span onClick={() => setState('Login')}>Login here</span>
          </p>
        ) : (
          <p className="switch-auth">Dont have an Account?{' '}
            <span onClick={() => setState('Sign Up')}>Sign Up here</span>
          </p>
        )}
      </div>
    </div>
  

  
      )
}

export default Login
