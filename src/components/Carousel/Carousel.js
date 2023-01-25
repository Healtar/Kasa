import './Carousel.scss';
import { useState } from "react";


export default function Carousel({imgData, name}) {
    const [current, setCurrent] = useState(0);
    const length = imgData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };


    return(
        <div className="carousel">
           
               { imgData.map((image, index) => {
                    return( 
                <div key={index}>
                    {console.log(image)}
                   {index === current && <img src={image}/> }
                </div>
                    )
            })
        }
            <div className='carousel-arrows'>
                <span onClick={() => prevSlide()}>Left</span>
                <span className='center'>center</span>
                <span onClick={() => nextSlide()}>Right</span>
            </div>
            

        </div>
    )

}