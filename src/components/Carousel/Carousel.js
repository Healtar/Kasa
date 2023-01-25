import './Carousel.scss';
import { useState } from "react";


export default function Carousel({imgData}) {
    
    return(
        <div className="carousel">
            <img className="carousel-img" src={imgData}/>
            <div className='carousel-arrows'>
                <span>Left</span>
                <span className='center'>center</span>
                <span>Right</span>
            </div>
            

        </div>
    )

}