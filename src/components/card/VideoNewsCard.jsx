import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const VideoNewsCard = ({ news }) => {
    const [showImgCard, setShowImgCard] = useState()

    useEffect(() => {
        window.addEventListener('resize', () => {
            window.innerWidth >= 650 ?
                setShowImgCard(true) : setShowImgCard(false);
        })
    }, [])

    return showImgCard
        ?
        (
            <Link className='p-4 hover:scale-105 ease-in-out duration-500 flex justify-center items-center' to='#'>
                <div className='relative w-36 h-20 lg:w-44 lg:h-24 shadow-lg'>
                    <img
                        className='w-full h-full object-cover'
                        src={`/assets/img/${news.image}`}
                        alt={news.title} />
                    <div className='card-shadow absolute inset-0 h-full w-full'></div>
                </div>
                <div className='flex flex-col gap-2 pl-3 whitespace-normal break-words w-36 h-24 lg:w-40 lg:h-24 shadow-lg'>
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
            <Link className='w-full border-b-2 border-las pb-2 mb-2 text-sm font-semibold xs:text-base xs:font-bold' to='#'>
                <h2 className=''>
                    {news.title}
                </h2>
                <span className='text-lfs self-start border-l-4 border-red-900 pl-3'>
                    {news.category}
                </span>
            </Link>
        )
}

export default VideoNewsCard