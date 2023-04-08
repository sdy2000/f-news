import React from 'react'
import { Link } from 'react-router-dom'

const NewsCard2 = ({ news }) => {
    return (
        <Link className=' w-full hover:scale-105 duration-500' to='#'>
            <h3 className=' text-p text-lg font-extrabold xl:text-xl'>
                {news.about}
            </h3>
            <div className='relative sm:h-32 md:h-52 lg:h-60 xl:h-72 w-full'>
                <img
                    className='w-full h-full object-cover'
                    src={`/assets/img/${news.image}`}
                    alt={news.title} />
                <div className='card-shadow absolute inset-0 w-full h-full'></div>
            </div>
            <div className='flex flex-col justify-start gap-3 mt-2 px-3 break-all w-[100%]'>
                <span className='text-t self-start border-l-4 border-red-900 pl-3 mt-3'>
                    {news.category}
                </span>
                <h3 className=' text-p text-lg font-extrabold xl:text-xl'>
                    {news.title}
                </h3>
            </div>
        </Link>
    )
}

export default NewsCard2