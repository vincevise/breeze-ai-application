import React, { useRef, useState } from 'react'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"; 
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';

const Login = () => {

    const [cred, setCred] = useState({email:'',password:''}) 
    const navigate = useNavigate()
    const inputRef = useRef(null)
    const btnRef = useRef(null)
    

    const handleChange = (e) => {
        setCred({
            ...cred,
            [e.target.name]:e.target.value
        })
    }

    const handleClick = () => { 
        signInWithEmailAndPassword(auth, cred.email, cred.password).then((response)=>{
            navigate('/')
            console.log(response); 
          })
    }

    const handlePassword = () => {
        console.log(inputRef.current.type, 'input ref')
        if(inputRef.current.type == 'password'){
            inputRef.current.type = 'text'
            btnRef.current.innerText = 'HIDE'
        }else{
            inputRef.current.type = 'password'
            btnRef.current.innerText = 'SHOW'
        }
    }

    console.log(cred);

  return (
    <div className=' px-10 w-full min-h-screen  flex flex-col items-center justify-center gap-6'>
        <h1 className='uppercase'>Login Form</h1>
        <input 
            type="email" 
            placeholder='Email' 
            className='px-4 py-2 min-w-[250px] w-[350px] outline-0 border-2 border-slate-300 focus:border-slate-600 rounded-md'
            onChange={(e)=>handleChange(e)}
            name='email'
        />
        <span className='relative flex items-center'>    
            <input 
                type="password"
                placeholder='Password' 
                className='px-4 py-2 min-w-[250px] w-[350px] outline-0 border-2 border-slate-300 focus:border-slate-600 rounded-md'
                onChange={(e)=>handleChange(e)}
                name='password'
                ref={inputRef}
            />
            <button className='absolute right-5 text-sm font-semibold' onClick={handlePassword} ref={btnRef}>SHOW</button>
            
        </span>

        
        <button 
            className='px-4 py-2 bg-slate-600 hover:bg-slate-700 active:bg-slate-800 text-white rounded-md uppercase  font-semibold text-md' onClick={handleClick}>
        Login</button>
        <p>Don't have an account, <Link to={'/register'} className='text-blue-500 underline'>register</Link ></p>
    </div>
  )
}

export default Login