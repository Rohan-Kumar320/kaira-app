import React from 'react'

const Categories = () => {
    const categories = [
        {
            id: 1,
            title: "Shop For Men",
            imgUrl: "./assets/4.jpg",
        },
        {
            id: 2,
            title: "Shop For Women",
            imgUrl: "./assets/5.jpg",
        },
        {
            id: 3,
            title: "Shop Accessories",
            imgUrl: "./assets/6.jpg",
        }
    ]
  return (
    <>
      <div className='grid grid-cols-3 mx-auto container mt-10'>

    {categories.map((cate,index) => (
        <div key={index}>
            <img src={cate.imgUrl} alt="" width={350}/>
            <p className='uppercase'>{cate.title}</p>
        </div>
    ))}
      </div>
    </>
  )
}

export default Categories
