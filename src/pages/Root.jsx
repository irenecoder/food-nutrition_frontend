import React from 'react'
import {Header} from '../components/header/Header';
import {Footer} from '../components/footer/Footer';
import { Outlet } from "react-router-dom";


const Root = () => {
  return (
    <div>Root
    <Header />
    <Outlet />
    <Footer />
    </div>
  )
}

export default Root