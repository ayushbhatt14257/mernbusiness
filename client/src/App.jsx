import React from 'react'
import Nav from './Components/nav/Nav';
import Home from './Components/home/Home'
import About from './Components/about/About'
import Services from './Components/services/Services'
import Contact from './Components/contact/Contact'
import User from './Components/userProfile/User'
import Login from './Components/login/Login'
import Register from './Components/register/Register'
import Logout from './Components/logout/Logout'
import Footer from './Components/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import { createContext,  useReducer } from 'react';

import {initialState, reducer} from '../src/reducer/UseReducer'

export const UserContext = createContext();

const Routing = () => {
  return(
    <>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/user' element={<User />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </>
  )
}

const App = () => {
  const [mystate, dispatch] = useReducer(reducer, initialState)
  return (

    <>
      <UserContext.Provider value = {{mystate, dispatch}}>
      <Nav />
      <Routing/>
      <Footer/>
      </UserContext.Provider>
    </>
  )
}

export default App;