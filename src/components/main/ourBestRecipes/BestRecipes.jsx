import React, { useEffect, useState } from "react";
import './BestRecipes.css'
import './ResponsiveRecipes.css'
import { RecipePost } from './Post/RecipePost'

import PicRecipe1 from '../../../assets/comida_1.svg'
import PicRecipe2 from '../../../assets/comida_2.svg'
import PicRecipe3 from '../../../assets/comida_3.svg'
import PicRecipe4 from '../../../assets/comida_4.svg'

import axios from "axios";



export const BestRecipes = () => {

    const [food, setFood] = useState([]);
    const [recipe, setRecipe] = useState({})

    const fetchData = () => {
        return axios.get("http://0.0.0.0:9000/apiv1/foods/")
              .then((response) => {
                const limitedFood = response.data.splice(0,4);
                setFood(limitedFood);
              });
      }
    
      useEffect(() => {
        fetchData();
      },[])

    return (
        <section className="bRecipes">
            <div className="recipes">
                <div className="infos">
                <ul>
                 
            {/* <li key={foodItem.Food_group_code}></li>
          )) */}
                </ul>
                    <h2>Our Best Recipes</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vakalia and Consonantia, there live the blind texts</p>
                </div>
                
                <div className="recipe-posts">
                {food && food.length > 0 && food.map((foodItem, index) =>(
                    
                    <RecipePost key={foodItem.id}
                    title={foodItem.Food_name}
                    src={PicRecipe1}
                    alt='A image of a beauty Broccoli Salad With Bacon'/>
                ))}
                

                    {/* <RecipePost title='Classic Beef Burgers'
                    src={PicRecipe2}
                    alt='A imagem of a beauty Classic Beef Burgers'/>

                    <RecipePost title='Classic Potato Salad'
                    src={PicRecipe3}
                    alt='A imagem of a beauty Classic Potato Salad'/>

                    <RecipePost title='Cherry Cobbler on the Grill'
                    src={PicRecipe4}
                    alt='A imagem of a beauty Cherry Cobbler on the Grill'/> */}
                </div>
            </div>
        </section>
    )
}