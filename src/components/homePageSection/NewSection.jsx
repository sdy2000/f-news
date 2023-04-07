import React from 'react'
import { HiArrowRight } from 'react-icons/hi2'
import { ReelNews } from '..'
import { Link } from 'react-router-dom'

const NewSection = ({ title, description, lastNews }) => {
    return (
        <div className='reel-news-bg mt-10 md:mt-16 lg:mt-20 mb-6'>
            <div className='container flex flex-col justify-start py-12'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-5xl font-semibold text-white'>
                        {title}
                    </h2>
                    <Link to='#' className='flex justify-center items-center text-white hover:text-accent rounded-2xl
                        border border-white hover:border-accent bg-none px-3 py-1 text-lg font-semibold duration-300'>
                        Visit {title} <HiArrowRight />
                    </Link>
                </div>
                <span className='text-white font-medium'>
                    {description}
                </span>
                <div className='grid grid-cols-1 sm:flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-3 mt-6'>
                    {
                        lastNews.map(news => (
                            <ReelNews news={news} key={news.newsId} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default NewSection