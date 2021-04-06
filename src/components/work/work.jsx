import './style.css';
import React, {useState} from 'react'

import loader from '../../templates/loader.gif';

const Work = ({src,id,img,tegs,name,description,color,year}) => {
    
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    const onLoadedData = () => {
        setIsVideoLoaded(true);
    }

    return (
        <div className="work" >
            <div className="container__max" style={(id % 2 === 0) ? {background : "#f2f2f2"} : {background : "#fff"}}>
                <div className="container__mini">
                    <div className="work__text">
                        <h2>{name}</h2>
                        <div className="under__line"></div>
                        <div className="under__line"></div>
                    </div>
                    <div className="work__video">
                        <div className="work__video__preloader">
                            <img style={{opacity: isVideoLoaded ? 0 : 1}} src={loader} alt="loader" />
                        </div>
                        
                        <video onLoadedData={onLoadedData} src={img} type="video/mp4" autoPlay loop muted preload="metadata">
                            <source src={img} type="video/mp4"></source>
                        </video>
                    </div>
                    <div className="work__additinal__text">
                        <h3><span>Tech: </span>{tegs.join(', ')}</h3>
                        <h3><span>Year:</span> {year} </h3>
                        <a target="_blank" rel="noreferrer" href={src}>Visit site</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Work;