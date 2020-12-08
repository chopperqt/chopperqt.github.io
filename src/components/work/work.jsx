import './style.css';
import {Link, useParams} from 'react-router-dom';

function isLoaded() {
    let i = new Image();

    i.onLoad = () => {
        
    }
}

const Work = ({src,img,tegs,name,description}) => {
    
    return (
        <div className="work" >
            <div className="work__image">
               <Link to={`/${name}`}><img src={img} /></Link>
            </div>
            <div className="work__title">
                <h3>{name}</h3>
            </div>
            <div className="work__stek">
                {isLoaded()}
                {tegs.map(item2 => {
                    return <span key={item2} id={item2}>{item2}</span>
                })}
                
            </div>
            {/* <div className="work__text">
                <p>{description}</p>
            </div> */}
            <button id="workBtn">See more</button>
        </div>
    );
}
export default Work;