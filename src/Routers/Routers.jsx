import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Error404 from '../pages/Error404'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup' // Asegúrate de que el nombre del archivo coincida
import Pagina from '../pages/Pagina'

function Routers() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/pagina' element={<Pagina />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </>
    )
}

export default Routers;
