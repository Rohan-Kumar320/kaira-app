import React from 'react'

const Items = () => {
    const items = [
        {
            id: 1,
            title: "Soft Leather Jacket",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, deserunt.",
            imgURL: "./assets/3.jpg"
        },
        {
            id: 2,
            title: "Soft Leather Clothes",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, deserunt.",
            imgURL: "./assets/3.jpg"
        },
        {
            id: 3,
            title: "Soft Leather Shoes",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, deserunt.",
            imgURL: "./assets/3.jpg"
        }
    ]
    return (
        <>
            <div className='mt-12'>
                <p className='text-center font-bold text-3xl'>New Collections</p>
                <p className='text-center mt-2 text-xl font-light text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptate dolorem nulla inventore, totam itaque. Est ut asperiores, voluptas inventore molestias magnam.</p>
            </div>
            <div className='grid gap-6 sm:grid-cols-3 container mx-8 mt-28'>
                {items.map((data ,index) => (
                    <div className='max-w-96' key={index}>
                        <img src={data.imgURL} alt="" width={350} />

                        <div className='text-container p-3'>
                            <p className='font-bold text-xl mt-2'>{data.title}</p>
                            <p className='text-justify mt-2'>{data.desc}</p>
                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}

export default Items
