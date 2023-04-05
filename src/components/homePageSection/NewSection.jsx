import React from 'react'
import { HiArrowRight } from 'react-icons/hi2'
import { ReelNews } from '..'

const NewSection = ({ title, description, lastNews }) => {
    return (
        <div className='reel-news-bg mt-10 md:mt-16 lg:mt-20 mb-6'>
            <div className='container flex flex-col justify-start py-12'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-5xl font-semibold text-white'>
                        {title}
                    </h2>
                    <span className='flex justify-center items-center text-white rounded-2xl
         border border-white bg-none px-3 py-1 text-lg font-semibold '>
                        Visit {title} <HiArrowRight />
                    </span>
                </div>
                <span className='text-white font-medium'>
                    {description}
                </span>
                <div className='flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-3 mt-6'>
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