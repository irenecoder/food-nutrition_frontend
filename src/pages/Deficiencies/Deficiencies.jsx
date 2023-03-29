import React,{useState,useEffect} from 'react'
import { PostBlog } from "./PostBlog/PostBlog";
import ProfilePic from '../../assets/profile.jpg'
import './Deficiencies.css'

import axios from 'axios';

const Deficiencies = () => {

    const[deficiencies,setDeficiencies] = useState([]);

    const [currentPage,setCurrentPage] = useState(1);
    const [postsPerPage,setPostsPerPage] = useState(6);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;

    const currentDeficiencies = deficiencies.slice(firstPostIndex,lastPostIndex);

    // fetch deficiencies data
  useEffect(() => {
    axios.get('http://0.0.0.0:9000/apiv1/deficiencies')
      .then(response => {
        setDeficiencies(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  return (
    <section className="blog">
      <div className="blogWrapper">
        <div className="topInfo">
          <h2>Health deficiencies caused by poor nutrition</h2>
          <p>
            Far  away, behind the word mountains, far from the countries
            Vakalia and Consonantia, there live the blind texts
          </p>
        </div>

        <div className="postsWrapper">
            <div className="postBtn">
            {/* <button className="left">←</button> */}
            </div>

           {deficiencies.length >0 &&(
            deficiencies.map((deficiency)=>{
            return(
                <PostBlog
            // src={BlogPic1}
            key = {deficiency._id}
            // alt="alimento1"
            title={deficiency.Deficiency_disease}
            signs= {deficiency.Sign_and_symptoms}
            lacking={deficiency.Nutrients}
            profile={ProfilePic}
            name="fabio"
            author="Fabio de Andrade"
          />
            )       
            }) )} 
          

          <div className="postBtn">
            {/* <button className="rigth">→</button> */}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Deficiencies