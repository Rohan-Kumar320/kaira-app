import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/cartSystem';

const Arrivals = () => {

    const dispatch = useDispatch();

    const arrivals = [
        {
            id: 1,
            title: "Dark Florish Onepiece",
            imgUrl: "./assets/7.jpg",
            price: "$55.00"
        },
        {
            id: 2,
            title: "Baggy Shirt",
            imgUrl: "./assets/8.jpg",
            price: "$65.00"
        },
        {
            id: 3,
            title: "Cotton Off-white Shirt",
            imgUrl: "./assets/9.jpg",
            price: "$50.00"
        },
        {
            id: 4,
            title: "crop sweater",
            imgUrl: "./assets/10.jpg",
            price: "$70.00"
        }
    ]

    const [transition, setTransition] = useState(false);
return (
    <>
    <div>
        <div className='mx-auto container flex justify-between mb-6 mt-10'>
            <p className='p-5'>
                <h1 className='uppercase text-2xl'>Our New Arrivals</h1>
            </p>
            <p className='p-5'>
                <button className='uppercase border-b-2'>View All Products</button>
            </p>
        </div>

        <div className='grid gap-4 sm:grid-cols-4 grid-cols-2 mx-auto container mb-10'> 
            {arrivals.map((arrivals, index) => (
            <div key={index} className='group'>
                    <img className='group-hover:scale-95 transition-all duration-300 ease-in-out' src={arrivals.imgUrl} alt="" width={350}/>
                    <p>{arrivals.title}</p>
                    <p className='group-hover:hidden'>{arrivals.price}</p>
                    <button className='hidden group-hover:block' onClick={() => dispatch(addToCart(arrivals))}>Add To Cart</button>
            </div>
            ))}
        </div>
    </div>
    </>
)
}

export default Arrivals
// className={`${transition ? "hidden" : "block"}`}