import React,{useState,useEffect} from 'react'
import './styles.css';
import axios from 'axios';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import {Link} from 'react-router-dom'

const SearchBar = () => {

    const[recipes,setRecipes] = useState([]);
    const[recommendations,setRecommendations] = useState([]);
    const[wordEntered,setWordEntered]=useState('');

    const handleFilter= (event) =>{
        const searchItem = event.target.value.toLowerCase();
        setWordEntered(searchItem);
        const newRecommend = recipes.filter((recipe)=>{
          return recipe.Food_name.toLowerCase().includes(searchItem);
        }
        );
        if (searchItem===""){
            setRecommendations([]);
        } else{
            setRecommendations(newRecommend); 
        }
         
    }

    const clearInput = ()=>{
        setRecommendations([]);
        setWordEntered("");
    };

  // fetch recipe data
  useEffect(() => {
    axios.get('http://0.0.0.0:9000/apiv1/recipes')
      .then(response => {
        setRecipes(response.data);
        setRecommendations(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
   
  return (
    <div className="search">
        <div className="searchInputs">
          <input type="text" placeholder="search recipe" value={wordEntered} onChange={handleFilter}/> 
          <div className="searchIcon">
          {recommendations.length === 0?<SearchIcon />:<CloseIcon id="clearBtn" onClick={clearInput}/>}</div>  
        </div>
        {recommendations.length >0 && (
        <div className="dataResult">
        {recommendations.slice(0,15).map((recipe)=>{
            return (
            <div key={recipe._id}>
            
                <a className="dataItem" href={`/recipes/${recipe._id}`} target="_blank"><p>{recipe.Food_name}</p></a>
                {/* <Link to={`/recipes/${recipe._id}`}>{recipe.Food_name}</Link> */}
             </div>

        )})}
            
        </div>
        )}

    </div>
  )
}

export default SearchBar;