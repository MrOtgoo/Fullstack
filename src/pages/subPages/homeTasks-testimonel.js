import React, { useState } from "react";
import testimonialData from "./testimonalData"
import StarIcon from "../../Icons/starIcon";

const testimonialCardWidth = 400; 
const testimonialCardSpacing = 30; 

const HomeTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < testimonialData.length - 1 ? prevIndex + 1 : prevIndex));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const disablePrevButton = currentIndex === 0;
  const disableNextButton = currentIndex === testimonialData.length - 1;

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:"#F5F7FA",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1080px",
        
          textAlign: "center",
          padding: "60px 0",
          position: "relative",
        }}
      >
        <h1 style={{ fontSize: "48px", fontWeight: 800, color: "#000" }}>
          What People Say About Us
        </h1>
        <div
          style={{
            backgroundColor: "transparent",
            width: "100%",
            overflowX: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: `${testimonialCardSpacing}px`,
              width: `${testimonialData.length * (testimonialCardWidth + testimonialCardSpacing)}px`,
              transform: `translateX(-${currentIndex * (testimonialCardWidth + testimonialCardSpacing)}px)`,
            }}
          >
            {testimonialData.map((card, index) => (
              <div
                key={index}
                style={{
                  minWidth: `${testimonialCardWidth}px`,
                  backgroundColor: "white",
                  height: "347px",
                  border: "2px solid #0073e6",
                  padding: "20px",
                  borderRadius: "8px",
                }}
              >
                {Array.from({ length: card.stars }).map((_, num) => (
                  <StarIcon key={num} />
                ))}
                <p style={{ marginTop: "20px" }}>{card.text}</p>
                <p style={{ fontWeight: 600 }}>{card.name}</p>
              </div>
            ))}
          </div>
        </div>
        <button onClick={handlePrev} >
          Prev
        </button>
        <button onClick={handleNext} >
          Next
        </button>
      </div>
    </div>
  );
};

export default HomeTestimonials;