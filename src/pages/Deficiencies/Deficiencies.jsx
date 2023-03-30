import React,{useState,useEffect} from 'react'
import { PostDef } from "./PostDef/PostDef";
import ProfilePic from '../../assets/profile.jpg'
import './Deficiencies.css'
import Pagination from './Pagination/Pagination';
import axios from 'axios';

const Deficiencies = () => {

    const[deficiencies,setDeficiencies] = useState([]);

    const [currentPage,setCurrentPage] = useState(1);
    const [postPerPage,setPostPerPage] = useState(3);

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;

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

        <div className="postWrapper">
            
           {currentDeficiencies.length >0 &&(
            currentDeficiencies.map((deficiency)=>{
            return(
                <PostDef
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

        <Pagination 
            totalPosts = {deficiencies.length}
            postPerPage = {postPerPage}
            setCurrentPage = {setCurrentPage}
            currentPage = {currentPage}
        />
          

          <div className="postBtn">
            {/* <button className="rigth">→</button> */}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Deficiencies