import React from 'react'
import './Pagination.css'

const Pagination = ({totalPosts,postPerPage,setCurrentPage,currentPage}) => {

    let pages = [];
    for(let i=1;i <= Math.ceil(totalPosts/postPerPage);i++){
        pages.push(i);
    }
    
  return (
    <div className='pagination'>
    {
        pages.map((page,index)=>{
        return <button key={index} className={page == currentPage? 'active':""} 
        onClick={()=>setCurrentPage(page)}>{page}</button>
   }) 
    }  
    <h2>Pagination</h2>
         
    </div>
  )
}

export default Pagination