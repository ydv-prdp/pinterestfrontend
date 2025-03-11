import { useState } from 'react'
import ImageComp from '../../components/image/ImageComp'
import apiRequest from '../../utils/apiRequest'
import { useNavigate } from 'react-router'

const AuthPage = () => {
  const [isRegister, setIsRegister] =  useState(true)
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    try{
      const res =await  apiRequest.post(`/users/auth/${isRegister ? "login" : "register"}`,data)
      setError("")
      navigate("/")
    }catch(err){
      setError(err.response.data.message)
    }
  }
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center">
      <div className='flex flex-col items-center justify-center gap-8 p-8 rounded-[32px] shadow-2xl'>
        <ImageComp path={"/general/logo.png"} className={"h-[36px] w-[36px]"}/>
        <h1 className='font-bold'>{isRegister ?  "Login to your account": "Create an account"}</h1>
        {isRegister ? (
          <form key="loginForm" className='w-[100%] flex flex-col gap-4' onSubmit={handleSubmit}>
          <div className='formGroup'>
            <label htmlFor='email'>Email</label>
            <input type="email" placeholder='Email' required name='email' id='email'/>
          </div>
          <div className='formGroup'>
            <label htmlFor='password'>Password</label>
            <input type="password" placeholder='password' required name='password' id='password'/>
          </div>
          <button type='submit' className='bg-[#e50829] p-4 border-none rounded-2xl text-white cursor-pointer font-bold hover:opacity-50'>Login</button>
          <p onClick={()=>setIsRegister(!isRegister)} className='hover:cursor-pointer text-[14px] text-center'>Don&apos;t have an account? <b>Register</b> </p>
          {error && <p className='text-red-500'>{error}</p>}
        </form>
        ):(
          <form key="registerForm" className='w-[100%] flex flex-col gap-4' onSubmit={handleSubmit}>
          <div className='formGroup'>
            <label htmlFor='username'>Username</label>
            <input type="text" placeholder='Username' required name='username' id='username'/>
          </div>
          <div className='formGroup'>
            <label htmlFor='displayName'>Name</label>
            <input type="text" placeholder='Display Name' required name='displayName' id='displayName'/>
          </div>
         
          <div className='formGroup'>
            <label htmlFor='email'>Email</label>
            <input type="email" placeholder='Email' required name='email' id='email'/>
          </div>
          <div className='formGroup'>
            <label htmlFor='password'>Password</label>
            <input type="password" placeholder='Password' required name='password' id='password'/>
          </div>
          <button type='submit' className='bg-[#e50829] p-4 border-none rounded-2xl text-white cursor-pointer font-bold hover:opacity-50'>Register</button>
          <p onClick={()=>setIsRegister(!isRegister)} className='hover:cursor-pointer'>Already have an account? <b>Login</b> </p>
          {error && <p>{error}</p>}
        </form>
        )}
      </div>
    </div>
  )
}

export default AuthPage