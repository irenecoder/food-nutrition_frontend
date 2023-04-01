import './PostDefStyles.css'
import './ResponsiveBlogCard.css'
import {Link} from 'react-router-dom'

export const PostDef = (props) => {
    return (
        <div className="PostBlog">
            <div className="topBlog">
                <h2>{props.title}</h2>
                <h4>Caused by lack of {props.lacking}</h4>
                <p>Signs and symptoms: {props.signs}</p>
                {/* <img src={props.src} alt={props.alt} /> */}
            </div>
            {/* <div className="middleBlog">
                <h2>{props.title}</h2>
            </div> */}
            <div className="botBlog">
                <Link to={'/deficiencies/recipes'}><button>Related recipes</button></Link>
                {/* <div className="botProfile">
                <img src={props.profile} alt={props.name} />
                <p>{props.author}</p>
                </div> */}
            </div>
        </div>
    )
}