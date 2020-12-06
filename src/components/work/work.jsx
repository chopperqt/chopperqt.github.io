import './style.css';

import load from './materials/load.gif'

function isLoaded() {
    let i = new Image();

    i.onLoad = () => {
        
    }
}

const Work = ({src,img,tegs,name,description}) => {
    
    return (
        <div className="work" >
            <div className="work__image">
               <a href={src} target="_blank"><img src={img} /></a>
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
            <div className="work__text">
                <p>{description}</p>
            </div>
            <button id="workBtn">See more</button>
        </div>
    );
}
export default Work;