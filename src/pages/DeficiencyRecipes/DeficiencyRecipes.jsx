import React,{useState,useEffect} from 'react'
import './DeficiencyRecipes.css'
// import Recipe from '../Recipe'
import axios from 'axios'

const DeficiencyRecipes = () => {

    const[deficiencies,setDeficiencies] = useState([])
    const[recipes,setRecipes] = useState([])
 // fetch deficiencies data
 useEffect(() => {
    axios.get('http://0.0.0.0:9000/apiv1/deficiencies')
      // .then(response => response.json())
      .then(response =>{
        // Rename the value in the deficiency Nutrient
        const renamedNutrient = response.data.map((deficiency)=>{
            return{
                Nutrients:deficiency.Nutrients,
                Vit_B12_in_mcg:deficiency["Vitamin B12 (cyanocobalamine)"]
            }
        })
        setDeficiencies(renamedNutrient)
      })
    //   console.log(renamedNutrient)
      .catch(error => {
        console.log(error);
      });
  }, []);
  
  // fetch recipes data
  useEffect(() => {
    axios.get('http://0.0.0.0:9000/apiv1/recipes')
      .then(response => {
        setRecipes(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
    DeficiencyRecipes
    {/* Use the renamed data */}
    {deficiencies.map(deficiency => (
        <div key={deficiency._id}><h2>{deficiency.Vit_B12_in_mc}</h2></div>
      ))}
    
    </div>

  )
}

export default DeficiencyRecipes
