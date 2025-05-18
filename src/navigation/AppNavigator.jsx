import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../pages/Layout';
import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';

function AppNavigator() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path='/contact' element={<ContactPage/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppNavigator