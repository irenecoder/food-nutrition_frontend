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
      // .then(response => response.json())  --> Not required in axios
      .then(response =>{
        // Loop through each object in the array
        response.data.forEach(deficiency=>{
          switch(deficiency._id){
            case '63ffdc60c5a101405f400d71':
              // Check if the object has the key whose value you want to change
              if (deficiency.Nutrients) {
                // Change the value of the key
                deficiency.Nutrients = 'Vit_C_in_mcg';
              
            }
              break;
            case '63ffdc60c5a101405f400d73':
              // Check if the object has the key whose value you want to change
              if (deficiency.Nutrients) {
                // Change the value of the key
                deficiency.Nutrients = 'Food_folate_in_mcg';
              
            }
              break;
            case '63ffdc60c5a101405f400d74':
              // Check if the object has the key whose value you want to change
              if (deficiency.Nutrients) {
                // Change the value of the key
                deficiency.Nutrients = 'Thiamin_in_mcg';
              
            }
              break;
            case '63ffdc60c5a101405f400d79':
              // Check if the object has the key whose value you want to change
              if (deficiency.Nutrients) {
                // Change the value of the key
                deficiency.Nutrients = 'Beta_carotene_equivalent_in_mcg';
                
              }
              break;
            case '63ffdc60c5a101405f400d7a':
              // Check if the object has the key whose value you want to change
              if (deficiency.Nutrients) {
                // Change the value of the key
                deficiency.Nutrients = 'Ca_in_mg';
                  
                }
              break;
            case '63ffdc60c5a101405f400d7c':
              // Check if the object has the key whose value you want to change
              if (deficiency.Nutrients) {
                // Change the value of the key
                deficiency.Nutrients = 'Fe_in_mg';
                    
                }
              break;
            case '63ffdc60c5a101405f400d7e':
              // Check if the object has the key whose value you want to change
              if (deficiency.Nutrients) {
                // Change the value of the key
                deficiency.Nutrients = 'Zn_in_mg';
                      
                }
              break;
            case '63ffdc60c5a101405f400d7f':
              // Check if the object has the key whose value you want to change
              if (deficiency.Nutrients) {
                // Change the value of the key
                deficiency.Nutrients = 'Na_in_mg';
                        
                }
              break;
            case '63ffdc60c5a101405f400d81':
              // Check if the object has the key whose value you want to change
              if (deficiency.Nutrients) {
                // Change the value of the key
                deficiency.Nutrients = 'Water_in_g';
                          
                }
              break;
            case '63ffdc60c5a101405f400d6e':
              // Check if the object has the key whose value you want to change
              if (deficiency.Nutrients) {
                // Change the value of the key
                deficiency.Nutrients = 'Retinol_in_mcg';
                            
                }
              break;
            case '63ffdc60c5a101405f400d75':
              // Check if the object has the key whose value you want to change
              if (deficiency.Nutrients) {
                // Change the value of the key
                deficiency.Nutrients = 'Niacin_in_mcg';
                          
                }
              break;
            case '63ffdc60c5a101405f400d76':
              // Check if the object has the key whose value you want to change
              if (deficiency.Nutrients) {
                // Change the value of the key
                deficiency.Nutrients = 'Riboflavin_in_mcg';
                            
                }
              break;
            case '63ffdc60c5a101405f400d7d':
              // Check if the object has the key whose value you want to change
              if (deficiency.Nutrients) {
                // Change the value of the key
                deficiency.Nutrients = 'Mg_in_mg';
                              
                }
              break;
            case '63ffdc60c5a101405f400d80':
              // Check if the object has the key whose value you want to change
              if (deficiency.Nutrients) {
                // Change the value of the key
                deficiency.Nutrients = 'K_in_mg';
                                
                }
              break;
            case '63ffdc60c5a101405f400d70':
              // Check if the object has the key whose value you want to change
              if (deficiency.Nutrients) {
                // Change the value of the key
                deficiency.Nutrients = 'Vit_B12_in_mcg';
                                  
                }
              break;
                        case '63ffdc60c5a101405f400d7f':
                          // Check if the object has the key whose value you want to change
                          if (deficiency.Nutrients) {
                            // Change the value of the key
                            deficiency.Nutrients = 'Na_in_mg';
                                    
                            }
                          break;
            default:
              break;
          }
        })
        setDeficiencies(response.data);
        
        
      })
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
        <div key={deficiency._id}><h2>{deficiency.Nutrients}</h2></div>
      ))}
    
    </div>
  )
}

export default DeficiencyRecipes
