import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {

  const {cart} = useSelector((data) => data.name)
  return (
    <div>
        <div className='grid grid-cols-4 mx-auto container mb-10'> 
            {cart.map((item, index) => (
            <div key={index} onMouseOver={() => setTransition(!transition)} onMouseOut={() => setTransition(!transition)}>
                    <img src={item.imgUrl} alt="" width={350}/>
                    <p>{item.title}</p>
                    <p >{item.price}</p>
                    <p >{item.quantity}</p>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Cart
