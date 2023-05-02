import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'; 
import AuthContextProvider from './context/AuthContext';
import Login from './pages/Login';
import Register from './pages/Resginster';
import Protected from './components/Protected';

function App() {
  return (
    <div> 
      <AuthContextProvider>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={
              <Protected>
                <Home/>
              </Protected>
            }/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;