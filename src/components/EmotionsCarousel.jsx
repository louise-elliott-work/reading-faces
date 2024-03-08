import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import reference from "/src/reference.json";
import './EmotionsCarousel.css';

function EmotionsCarousel() {

  return (
    <>
        <Carousel className="reference-grid activeIndex={index} onSelect={handleSelect}">
        {reference.map(emotion => (
            <Carousel.Item key={emotion.id}>
                <div className="image-container"><img className= "emotion-image" src={emotion.image} alt={`Photo of ${emotion.name}`} /></div>
                <p className="emotion-name">{emotion.name}</p>
            </Carousel.Item>
        ))}
        </Carousel>
    </>
  );
}

export default EmotionsCarousel;