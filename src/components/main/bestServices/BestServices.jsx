import './Styles.css'
import './ResponsiveService.css'
import ServPic from '../../../assets/bloco_services.svg'
import {Link} from 'react-router-dom'

export const BestServices = () => {
    return (
        <section className="services">
            <div className="servicesWrapper">
                <div className="leftServices">
                    <img src={ServPic} alt='txt' />

                </div>

                <div className="rigthServices">
                    <h2>Good nutrition reduces Deficiencies</h2>

                    <p>Far far away, begind the word mountains, far from the countris Vakalia and Consanantia, there live the bind texts.</p>

                    <p>Separated they live in Bookmarksgrove rigth at the coast of the Semantics, a larg language ocean.</p>

                    <p>A small rier named Duden flow by their place and supplies it with the necessary regelialia.</p>

                    <Link to={'/deficiencies'}><button>Know More</button></Link>


                </div>
            </div>
        </section>
    )
}