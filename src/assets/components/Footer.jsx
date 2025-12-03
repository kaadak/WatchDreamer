import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="py-20 bg-primary text-white">
      <div className="container mx-auto px-5">
        <div className="grid md:grid-cols-3 gap-8 md:gap-10 p-4">
          <div className="space-y-4">
            <p className="text-secondary text-lg">Alberto Watches</p>

            <p className="space-y-4 leading-relaxed">
              Alberto Watches is a premier luxury watch brand, known for its
              precision, elegance, and craftsmanship. Explore our exquisite
              collection today. © 2024 Alberto Watches. All Right reserved
            </p>
          </div>

          <div className="space-y-4 text-center">
            <p className="text-secondary text-lg">Site Map</p>

            <nav className="flex items-center  flex-col gap-4">
              <Link className="hover:underline text-left">Home</Link>
              <Link className="hover:underline text-left">About</Link>
              <Link className="hover:underline text-left">Services</Link>
              <Link className="hover:underline text-left">Contact</Link>
            </nav>
          </div>
    

          <div className="space-y-4">
            <p className="text-secondary text-lg">Contact Us</p>

            <p className="space-y-4 leading-relaxed">
              123 Luxury Avenue, Suite 100 sango ota ogun state Phone: (123)
              456-7890 Email: support@albertowatches.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
