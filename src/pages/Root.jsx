import React from 'react'
import {Header} from '../components/header/Header';
import {Footer} from '../components/footer/Footer';
import { BestServices } from '../components/main/bestServices/BestServices';
import { BestRecipes } from '../components/main/ourBestRecipes/BestRecipes';
import { Blog } from '../components/main/blog/Blog';
import { Hero } from '../components/main/hero/HeroSection';
import { Contact } from '../components/main/contact/Contact';
import { Outlet } from "react-router-dom";


const Root = () => {
  return (
    <div>
    <Header />
    {/* <Hero /> */}
    <Outlet />
    {/* <BestRecipes /> */}
    {/* <BestServices /> */}
    {/* <Blog /> */}
    {/* <Contact /> */}
    
    <Footer />
    </div>
  )
}

export default Root