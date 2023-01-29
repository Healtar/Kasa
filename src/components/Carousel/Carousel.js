import "./Carousel.scss";
import { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export default function Carousel({ imgData, name }) {
  const [current, setCurrent] = useState(0);
  const length = imgData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="carousel">
      {imgData.map((image, index) => {
        return (
          <div key={index}>
            {console.log(image)}
            {index === current && <img src={image} alt="image du logement" />}
          </div>
        );
      })}
      <div className="carousel-arrows">
        <FaChevronLeft className="arrow-left" onClick={() => prevSlide()} />
        <span className="center">
          {current + 1}/{length}
        </span>
        <FaChevronRight className="arrow-right" onClick={() => nextSlide()} />
      </div>
    </div>
  );
}
