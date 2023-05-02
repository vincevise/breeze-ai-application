import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import Login from '../pages/Login'


const Protected = ({children}) => {
  
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()

    if(!user){
        return <Login/>
    }
    return children
}

export default Protected