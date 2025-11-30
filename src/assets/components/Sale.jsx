import React from "react";
import image1 from "./../images/image1.jpg";
import image2 from "./../images/image1a.jpg";
import image3 from "./../images/image1b.jpg";
import image4 from "./../images/image1c.jpg";
import { Link } from "react-router-dom";

const Sale = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container px-10 mx-auto text-center">
        <div className="grid gap-7 md:grid-cols-4">
          {/* ---------------1--------------------- */}
          <div className="md:row-span-2 font-display p-4 relative flex justify-center items-center bg-white shadow-2xl md:col-span-2 ">
            <img
              src={image1}
              className="w-full  hover:brightness-50 hover:scale-110 transform duration-300 h-full"
              alt=""
            />

            <div className="absolute group top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-4">
              <p className="text-white text-lg">Sale up to 30% OFF</p>
              <h3 className="text-white text-4xl">NEW ARRIVALS</h3>
              <Link to="/service">
                <button className="px-5 py-2 text-white border border-white">
                  SHOP COLLECTION
                </button>
              </Link>
            </div>

            {/* -------------------2--------------------- */}
          </div>
          <div className=" p-4 relative bg-white shadow-xl md:col-span-2">
            <img
              src={image2}
              alt=""
              className="w-full h-auto hover:scale-110 transform duration-300"
            />

            <div className="absolute top-25 space-y-2 left-20">
              <p className="text-2xl text-primary font-semibold">
                Dress Watches
              </p>
              <Link className="underline text-lg text-secondary" to="/service">
                Shop Now
              </Link>
            </div>
          </div>

          {/* ------------------3------------------- */}
          <div className="p-4 relative shadow-xl bg-white">
            <img
              src={image3}
              alt=""
              className="w-full hover:scale-110 transform duration-300 h-auto"
            />
            <div className="absolute inset-0 text-left flex flex-col  justify-between p-5">
              <p className="text-secondary text-2xl">From $300</p>
              <p className="font-extralight md:text-xl text-4xl tracking-wider">
                Tommy Hilfiger <br /> Silver Bracelet <br /> Watch
              </p>
              <Link className="underline text-lg text-secondary" to="/service">
                Shop Now
              </Link>
            </div>
          </div>

          {/* --------------------4-------------------------- */}
          <div className=" bg-white p-4 relative shadow-xl">
            <img
              src={image4}
              alt=""
              className="w-full hover:scale-110 transform duration-300 h-auto"
            />

            <div className="absolute inset-0 text-left flex flex-col  justify-between p-5">
              <p className="text-secondary text-2xl">From $300</p>
              <p className="font-extralight md:text-xl text-4xl tracking-wider">
                Seconda <br /> Bracelet <br /> Watch
              </p>
              <Link className="underline text-lg text-secondary" to="/service">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
