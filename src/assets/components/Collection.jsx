import React from 'react'
import { Link } from 'react-router-dom'
import vintage1 from './../images/vintage1.jpg'
import vintage4 from './../images/vintage4.jpg'
import vintage5 from './../images/vintage5.jpg'
import vintage6 from './../images/vintage6.jpg'
import vintage2 from './../images/vintage2.jpg'
import vintage3 from './../images/vintage3.jpg'



const Collection = () => {

    const products = [
        {
            image: vintage1,
            text: "Heritage Elegance",
            price: "$2800"
        },

        {
            image: vintage2,
            text: "Retro Prestige",
            price: "$3200"
        },

        {
            image: vintage3,
            text: "Classic Legacy",
            price: "$4200"
        },

         {
            image: vintage4,
            text: "Cantique Majesty",
            price: "$1200"
        },

         {
            image: vintage5,
            text: "Vintage Splendor",
            price: "$1000"
        },

        {
            image: vintage6,
            text: "Retro Timepiece",
            price: "$5000"
        }
    ]


  return (
    <div className='py-20 bg-white'>
      <div className='container mx-auto text-center px-5'>
        <div className=''>
            <div className='space-y-4'>
                <h1 className='text-4xl font-bold'>Our Exquisite Collections</h1>
                <p className='text-xl text-secondary font-medium'>Explore Our range of Vintage Smart luxury Watch</p>
            </div>

            <div className='grid md:grid-cols-3 gap-4 p-4'>
                {products.map((product, index)=>(
                    <div className='p-4 shadow-md space-y-2' key={index}>
                    <img src={product.image} alt="" className='w-full h-auto hover:scale-105 transform duration-300' />
                    <h1 className='text-left text-md'>{product.text}</h1>
                    <p className='text-left text-sm text-gray-600'>{product.price}</p>
                    <button className='px-4 py-2 rounded-sm bg-primary hover:bg-gray-800 text-white '>Add to Cart</button>
                </div>
                ))}
            </div>
             <Link to='/service'><button className='px-4 hover:bg-primary hover:text-white mt-5 py-2 rounded-sm bg-secondary text-primary '>See more</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Collection
