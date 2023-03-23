import "./styles.css";
import "./ResponsiveHero.css";
import React, { useState,useEffect } from "react";
import HeroImg from "../../../assets/Illustration.svg";
import axios from "axios";

export const Hero = () => {

  
  const [query,setQuery] = useState('');
  const [recommendations,setRecommendations] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [products,setProducts] = useState({});

  const fetchData = () => {
    return axios.get("https://dummyjson.com/products")
          .then((response) => setProducts(response.data));
  }

  useEffect(() => {
    fetchData();
  },[])

  const handleQueryChange = async (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);

    try {
      const responseBeta = await axios.get(`https://dummyjson.com/products?q=${newQuery}`);
      setRecommendations(responseBeta.data);
      setShowModal(true); // Show the modal when recommendations are available
    } catch (error) {
      console.error(error);
    }
  };

  const handleRecommendationClick = (recommendation) => {
    // Handle user clicking on a recommendation
    console.log(`User clicked on recommendation: ${recommendation}`);
    setShowModal(false); // Hide the modal when a recommendation is selected
  };
  
  return (
    <section className="HeroSec">
      <div className="contentWrapper">
        <div className="leftContent">
          <h2>Ready for Trying a new recipe?</h2>
          <div className="handle">
            <input type="text" value={query} onChange={handleQueryChange} placeholder="Search healthy recipes" />

            {recommendations.length > 0 && (
          <ul>
          {recommendations.map((recommendation) => (
            <li key={recommendation.id} onClick={() => handleRecommendationClick(recommendation)}>
              {recommendation.title}
            </li>
          ))}
        </ul>
      )}
            <button type="text">🔎</button>
          </div>
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
