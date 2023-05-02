import React, { useContext, useState } from 'react'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/firebase';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import GoogleButton from 'react-google-button';
 

const Register = () => {
    const {user,googleSignIn} = useContext(AuthContext)
    const [cred, setCred] = useState({email:'',password:''}) 
    

    const handleChange = (e) => {
        setCred({
            ...cred,
            [e.target.name]:e.target.value
        })
    }

    const handleClick = () => { 
        createUserWithEmailAndPassword(auth, cred.email, cred.password) 
    }
 

  return (
    <div className=' sm:px-10 w-full min-h-screen  flex flex-col items-center justify-center gap-6'>
        <div className='w-11/12 sm:w-[350px] px-4 py-10  border border-slate-300 '>

            <h1 className='text-center'>Register Form</h1>
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
                Sign Up
            </button> 
            <div className='flex items-center justify-center    my-3'>
                <span className='w-full border-t border-slate-300  '></span>
                <span className='px-4 text-sm'>OR</span>
                <span className='w-full border-t border-slate-300  '></span>
            </div>

            <GoogleButton className='mx-auto' onClick={googleSignIn}/>
            
        </div>
        <p className='w-[350px] px-4 py-2 text-center text-sm border border-slate-300'>Already have an account, <Link to={'/login'} className='text-blue-500 underline'>Login</Link ></p>
    </div>
  )
}

export default Register