import React from 'react'
import { BestServices } from '../components/main/bestServices/BestServices';
import { BestRecipes } from '../components/main/ourBestRecipes/BestRecipes';
import { Blog } from '../components/main/blog/Blog';
import { Hero } from '../components/main/hero/HeroSection';
import { Contact } from '../components/main/contact/Contact';

const Home = () => {
  return (
    <div>
        <Hero />
        <BestRecipes />
        <BestServices />
        <Blog />
        <Contact />
    
    </div>
  )
}

export default Home;