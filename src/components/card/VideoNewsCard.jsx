import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { XsNewsCard } from '..'

const VideoNewsCard = ({ news }) => {
    const [showImgCard, setShowImgCard] = useState()

    useEffect(() => {
        window.addEventListener('resize', () => {
            window.innerWidth >= 650 ?
                setShowImgCard(true) : setShowImgCard(false);
        })
    }, [])

    useEffect(() => {
        window.innerWidth >= 650 ?
            setShowImgCard(true) : setShowImgCard(false);
    }, [])

    return showImgCard
        ?
        (
            <Link className='p-4 hover:scale-105 ease-in-out duration-500 flex justify-center items-center'
             to={`/news/${news.slug}`}>
                <div className='relative w-36 h-20 lg:w-44 lg:h-24 xl:w-56 xl:h-32 shadow-lg'>
                    <img
                        className='w-full h-full object-cover'
                        src={`/assets/img/${news.image}`}
                        alt={news.title} />
                    <div className='card-shadow absolute inset-0 h-full w-full'></div>
                </div>
                <div className='flex flex-col gap-2 xl:gap-5 pl-3 whitespace-normal break-words w-36 h-24 lg:w-40 lg:h-24 xl:w-56 xl:h-32'>
                    <h3 className='text-dfs font-semibold xl:text-xl max-h-20 overflow-hidden'>
                        {news.title}
                    </h3>
                    <span className='text-lft text-sm self-start border-l-4 border-blue-700 pl-3'>
                        {news.category}
                    </span>
                </div>
            </Link>
        )
        :
        (
            <XsNewsCard title={news.title} category={news.category} slug={news.slug} />
        )
}

export default VideoNewsCard