import './PostRecipe.css'
import './ResponsiveCardRecipe.css'
// import {Link} from 'react-router-dom'

export const RecipePost = (props) => {


    return (
       <div className="posterWrapper">
           <div className="leftInfo">
               <img src={props.src} alt={props.alt}/>

           </div>
           <div className="rigthInfo">
               <h2>{props.title}</h2>
               <button>See Recipe</button>
           </div>
       </div>
    )
}