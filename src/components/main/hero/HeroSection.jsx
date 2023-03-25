import "./styles.css";
import "./ResponsiveHero.css";
import React, { useState,useEffect } from "react";
import HeroImg from "../../../assets/Illustration.svg";
import axios from "axios";
import SearchBar from "./SearchBar";

export const Hero = () => {

  const[recipes,setRecipes] = useState([]);
  const[recommendations,setRecommendations] = useState([]);
  const[searchItem,setSearchItem]=useState('');

  // fetch recipe data
  useEffect(() => {
    axios.get('http://0.0.0.0:9000/apiv1/recipes')
      .then(response => {
        setRecipes(response.data);
        setRecommendations(response.data.splice(0,5));
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleSearch = event =>{
    const term = event.target.value.toLowerCase();
    setSearchItem(term);

    const recommended = recipes.filter(recipe =>
      recipe.Food_name.toLowerCase().includes(term)
      // recipe.Food_description.toLowerCase().includes(term)
    );

    setRecommendations(recommended)
  };
  
  return (
    <section className="HeroSec">
      <div className="contentWrapper">
        <div className="leftContent">
          <h2>Ready for Trying a new recipe?</h2>

          <SearchBar />
        </div>

        <div className="rigthContent">
          <div className="heroImg">
            <img src={HeroImg} alt="draw with healthy calcule" />
          </div>
        </div>
      </div>
    </section>
  );
};
