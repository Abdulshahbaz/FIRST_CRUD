import './App.css'
import React from 'react'
import Home from './components/Home'
import Adduser from './components/Adduser'
import Updateuser from './components/Updateuser'
import Userlisting from './components/Userlisting'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import {Provider} from 'react-redux'
import Store from './Redux/Store'
const App = () => {
    return (
        <Provider store={Store}>
        <>
            <BrowserRouter>
            <div className='header'>
                <h2 className='crud'>CRUD OPERATION REACT WITH REDUX</h2>
            </div>
                <Routes>
                    <Route path='/home' element={<Home></Home>}></Route>
                    <Route path='/user/add' element={<Adduser></Adduser>}></Route>
                    <Route path='/user/edit/:code' element={<Updateuser></Updateuser>}></Route>
                    <Route path='/' element={<Userlisting></Userlisting>}></Route>
                 
                </Routes>
            </BrowserRouter>
          <ToastContainer className='toast-position' position='buttom-right'></ToastContainer>
        </>
        </Provider>
    )
}

export default App
