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
     <div className=' sm:px-10 w-full min-h-screen  flex flex-col items-center justify-center gap-6'>
        <div className='w-11/12 sm:w-[350px] px-4 py-10  border border-slate-300 '>

            <h1 className='text-center'>Login Form</h1>
            <input 
                type="email" 
                placeholder='Email' 
                className='px-2 py-1 mt-2  w-full outline-0 border border-slate-300 focus:border-slate-600 rounded-sm'
                onChange={(e)=>handleChange(e)}
                name='email'
            />

            <input 
                type="text" 
                placeholder='Password' 
                className='px-2 py-1 my-2 w-full outline-0 border border-slate-300 focus:border-slate-600 rounded-sm'
                onChange={(e)=>handleChange(e)}
                name='password'
            />
            
            <button 
                className='w-full my-2 py-1 bg-slate-600 hover:bg-slate-700 active:bg-slate-800 text-white rounded-sm text-sm font-semibold' onClick={handleClick}>
                Login
            </button>  

         
            
        </div>
        <p className='w-[350px] px-4 py-2 text-center text-sm border border-slate-300'>Don't have an account, <Link to={'/register'} className='text-blue-500 underline'>Register</Link ></p>
    </div>
  )
}

export default Login