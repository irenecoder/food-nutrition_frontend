import React from 'react'
import './Deficiencies.css'

const Deficiencies = () => {
  return (
    <section className="blog">
      <div className="blogWrapper">
        <div className="topInfo">
          <h2>Health conditions caused by poor nutrition</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vakalia and Consonantia, there live the blind texts
          </p>
        </div>

        <div className="postsWrapper">
            <div className="postBtn">
            <button className="left">←</button>
            </div>
            
          <PostBlog
            src={BlogPic1}
            alt="alimento1"
            title="Quick-start guide to nuts and seeds"
            profile={ProfilePic}
            name="fabio"
            author="Fabio de Andrade"
          />

          <PostBlog
            src={BlogPic2}
            alt="alimento2"
            title="The top 10 benefits of eating healthy"
            profile={ProfilePic}
            name="Rapha Gama"
            author="Raphael Gama"
          />

          <PostBlog
            src={BlogPic3}
            alt="alimento3"
            title="Nutrition: Tips for improving Your health"
            profile={ProfilePic}
            name="MM"
            author="Marllon Maia"
          />

          {/* <PostBlog
            src={BlogPic4}
            alt="alimento4"
            title="How to get stronger without Gym"
            profile={ProfilePic}
            name="Will"
            author="Atevilson Freitas"
          /> */}
          <div className="postBtn">
            <button className="rigth">→</button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Deficiencies