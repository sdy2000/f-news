import React from 'react'
import { Link } from 'react-router-dom'

const ReelNews = ({ news }) => {
    return (
        <Link className='relative hover:scale-105 ease-in-out duration-500 bg-white' to='#'>
            <img
                className='h-72 sm:h-44 md:h-52 w-full object-cover'
                src={`/assets/img/${news.image}`}
                alt={news.title} />
            <div className='card-shadow absolute inset-0 h-72 sm:h-44 md:h-52'></div>
            <div className='flex flex-col justify-start gap-3 py-2 px-3 break-all'>
                <h3 className='text-lg font-extrabold xl:text-xl'>
                    {news.title}
                </h3>
                <h5 className='hidden md:inline text-base xl:text-lg max-h-52'>
                    {news.description}
                </h5>
            </div> 
        </Link>
    )
}

export default ReelNews