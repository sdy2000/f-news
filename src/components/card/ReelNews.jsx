import React from 'react'
import { Link } from 'react-router-dom'

const ReelNews = ({ news }) => {
    return (
        <Link className='hover:scale-105 ease-in-out duration-500 bg-p rounded-lg overflow-hidden'
         to={`/news/${news.slug}`}>
            <div className='relative h-72 sm:h-44 md:h-52 w-full'>
                <img
                    className='w-full h-full object-cover'
                    src={`/assets/img/${news.image}`}
                    alt={news.title} />
                <div className='card-shadow absolute inset-0 w-full h-full'></div>
            </div>
            <div className='flex flex-col justify-start gap-3 py-2 px-3 break-all'>
                <h3 className='text-p text-lg font-semibold xl:text-xl py-2 '>
                    {news.title}
                </h3>
                <h5 className='text-s hidden md:inline text-base xl:text-lg max-h-52'>
                    {news.description}
                </h5>
            </div>
        </Link>
    )
}

export default ReelNews