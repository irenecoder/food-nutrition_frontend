import React from 'react'
import './Pagination.css'

const Pagination = (totalPost,postPerPage,setCurrentPage,currentPage) => {

    let pages = [];
    for(let i=1;i<=Math.ceil(totalPost/postPerPage);i++){
        pages.push(i);
    }
    
  return (
    <div className='pagination'>{
        pages.map((page,index)=>{
        return <button key={index} className={page === currentPage? 'active':""} 
        onClick={()=>setCurrentPage(page)}>{page}</button>
   }) 
    }       
    </div>
  )
}

export default Pagination