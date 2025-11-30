import React, { useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { IoIosBulb } from "react-icons/io";
import { FaRegGem } from "react-icons/fa";
import { SiTimescale } from "react-icons/si";
import { GrDocumentPerformance } from "react-icons/gr";

const Features = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((el) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              el.classList.add("slide-up");
            } else {
              el.classList.remove("slide-up"); // allows replay on scroll
            }
          });
        },
        { threshold: 0.2 } // triggers when 20% visible
      );

      observer.observe(el);
    });
  }, []);

  const features = [
    {
      icon: <FaStar className="text-secondary text-3xl" />,
      title: "Quality",
      text: "We use only the finest materials to ensure the highest quality for every watch we create.",
    },
    {
      icon: <GrServices className="text-secondary text-3xl" />,
      title: "Craftsmanship",
      text: "Our skilled artisans handcraft each watch with meticulous attention to detail.",
    },
    {
      icon: <IoIosBulb className="text-secondary text-3xl" />,
      title: "Innovation",
      text: "We continually innovate to blend traditional techniques with modern technology.",
    },
    {
      icon: <FaRegGem className="text-secondary text-3xl" />,
      title: "Luxury Material",
      text: "We use only the finest materials to ensure the highest quality for every watch we create.",
    },
    {
      icon: <SiTimescale className="text-secondary text-3xl" />,
      title: "Timeless Aesthetics",
      text: "Our designs are inspired by timeless elegance, making each watch a sophisticated accessory that never goes out of style.",
    },
    {
      icon: <GrDocumentPerformance className="text-secondary text-3xl" />,
      title: "High Performance",
      text: "Our watches are designed to perform flawlessly under all conditions, offering durability, accuracy, and reliability.",
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto space-y-10 px-10 text-center">
        <div className="p-4 space-y-3 bg-white shadow-sm">
          <h2 className="text-3xl font-semibold">
            Some Features that Made us Unique
          </h2>
          <p className="text-xl font-medium">
            Discover the exceptional craftsmanship and innovative design that
            <br />
            set our watches apart.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7 md:gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="p-4 shadow-md hover:shadow-secondary transform duration-300 space-y-4 reveal"
            >
              <h2 className="font-semibold justify-center text-2xl flex gap-3">
                {feature.icon} {feature.title}
              </h2>
              <p className="text-md">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
