import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { AvatarGenerator } from 'random-avatar-generator'


const Home = () => {
    const {logOut, user} = useContext(AuthContext) 

    const [avatar, setAvatar] = useState(null) 

    const generateAvatar = async() => { 
        const generator = new AvatarGenerator()
        const photoURL = generator.generateRandomAvatar() 

        setAvatar(photoURL) 
    } 
  return (
    <div >
        <nav className='fixed bg-blue-400 w-full py-2 px-4'>
            <h1 className='inline-block text-white text-lg font-bold'>Home</h1>
            <button className='bg-white px-2 py-1 rounded-md font-semibold float-right	' onClick={logOut}>SignOut</button>
        </nav>
        <section className='pt-20 px-10 md:px-24 text-center'>
            <h1 className='shrink-0 w-full text-center mb-2'>Hello World!!</h1>
            <button onClick={generateAvatar} className='px-2 py-1 bg-green-500 mt-2 text-white font-semibold rounded-md active:bg-green-600 mb-4'>Generate Random Avatar</button>
            <div className='flex justify-center'>
                
                {avatar ? <img src={avatar} className='w-11/12 sm:w-[400px]  lg:w-[400px]' alt="" /> : <img src={ "https://static.vecteezy.com/system/resources/previews/007/296/443/original/user-icon-person-icon-client-symbol-profile-icon-vector.jpg"} className='w-11/12 sm:w-[400px]  lg:w-[400px]' alt="" />}
            </div>
            
            
        </section>
        
    </div>
  )
}

export default Home