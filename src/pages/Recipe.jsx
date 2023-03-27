import React,{useState,useEffect} from 'react'
import axios from 'axios';
import ServPic from '../assets/bloco_services.svg';

const Recipe = (props) => {

    const[recipe,setRecipe] = useState(null); 
    // fetch recipe data
  useEffect(() => {
    axios.get(`http://0.0.0.0:9000/apiv1/recipes/${props.match.params.id}`)
      .then(response => {
        setRecipe(response.data);
      })
      .catch(error => {
        console.log(error);
      } );
  }, [props.match.params.id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }
   
  return (
    <section className="services">
            <div className="servicesWrapper">
                <div className="leftServices">
                    <img src={ServPic} alt='txt' />

                </div>

                <div className="rigthServices">
                    <h2>{recipe.Food_name}</h2>
                    <p>{recipe.Dish_group_description}</p>
                    <p>{recipe.Food_description}</p>
                    <p>{recipe.Food_ingredients}</p>
                    <p>{recipe.Food_preparation_cooking_serves_makes}</p>
                    <small>{recipe.Time}</small>

                    <button>Like</button>


                </div>
            </div>
        </section>
  )
}

export default Recipe