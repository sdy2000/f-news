import React from 'react'
import { NewsScrollBar } from '..'
import { Link } from 'react-router-dom'
import { HiArrowLongRight } from 'react-icons/hi2'

const NewsType = ({ newsName, data, color }) => {
    return (
        <div className='flex flex-col justify-start mt-6 sm:gap-6 lg:gap-12'>
            <div className='flex justify-between items-center'>
                <h2 className={`text-p text-lg font-bold md:text-xl md:font-extrabold lg:text-2xl xl:text-3xl
             border-l-4 ${color} pl-3`}>
                    {newsName}
                </h2>
                <Link to='#' className='text-s font-bold flex justify-center items-center hover:text-accent duration-500'>
                   See more <HiArrowLongRight size={25} />
                </Link>
            </div>

            <NewsScrollBar mianNews={data} />

        </div>
    )
}

export default NewsType