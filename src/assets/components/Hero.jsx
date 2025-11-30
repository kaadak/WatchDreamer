import React, { useState, useEffect } from "react";
import first from "./../images/land watch 2.png";
import second from "./../images/land watch.png";
import third from "./../images/landing.png";
import { Link } from "react-router-dom";


const Hero = () => {
      const slides = [
    {
      title: "WatchDreamer",
      description:
        "Discover the finest watches crafted with precision and elegance.",
      image: first,
    },
    {
      title: "Luxury Watches for Every Occasion",
      description: "Find the perfect watch for any event or celebration.",
      image: second,
    },
    {
      title: "Crafted with Precision",
      description: "Every watch is a masterpiece of craftsmanship.",
      image: third,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const currentSlide = slides[currentIndex];
   return (
    <div className="bg-primary container py-20 gap-4 mx-auto min-h-screen  flex-col-reverse md:flex-row flex justify-center items-center">
      <div className="space-y-3 md:space-y-5 slide-text " key={currentIndex}>

        {currentIndex === 0 && (
          <p className="text-lg font-medium text-center md:text-left font-display text-white">
            Welcome to
          </p>
        )}
        <h1 className="text-secondary text-center md:text-left text-5xl md:text-6xl font-bold  font-display">
          {currentSlide.title}
        </h1>
        <p className="text-white text-center font-medium text-sm tracking-tight">
          {currentSlide.description}
        </p>

        <Link to="/service">
          <button className="px-4 py-2 font-display bg-secondary hover:bg-secondary/80 rounded-sm mx-auto block">
            Products
          </button>
        </Link>
      </div>
      <img
        src={currentSlide.image}
        key={currentIndex + '-img'}
        className="w-[70%] md:w-[50%] h-auto slide-image"
        alt=""
      />
    </div>
  );
}

export default Hero
