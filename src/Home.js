import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const slides = [
  {
    image: "../assets/img-2.jpg",
    title: "Pure Herbal Hair Oil",
    text: "Experience the natural goodness of herbal extracts for stronger, shinier hair."
  },
  {
    image: "../assets/img-3.jpg",
    title: "Revitalize Your Hair",
    text: "Our unique formula nourishes your scalp and promotes hair growth."
  },
  {
    image: "../assets/img-4.jpg",
    title: "Natural & Chemical-Free",
    text: "Made with pure herbal ingredients, ensuring the best care for your hair."
  }
];

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <Carousel className="w-100">
        {slides.map((slide, index) => (
          <Carousel.Item key={index} interval={1000}>
            <img className="d-block w-100 slider-img" src={slide.image} alt={`Slide ${index + 1}`} />
            <Carousel.Caption className="hero-content"> {/* Align content to the right */}
              <h1 className="fw-bold text-success">{slide.title}</h1>
              <p className="lead">{slide.text}</p>
              <button className="btn btn-success mt-3">Learn More</button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default Hero;
