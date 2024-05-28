import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Pqr from '../pages/Pqr'
import Login from '../pages/Login'

function Routers() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/pqr' element={<Pqr />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </>
    )
}

export default Routers