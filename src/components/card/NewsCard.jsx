import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const NewsCard = ({ news }) => {
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
            <Link className='relative sm:w-72 md:w-96 inline-block p-2 hover:scale-105 ease-in-out duration-500' to='#'>
                <img
                    className='sm:h-44 md:h-52 w-full object-cover'
                    src={`/assets/img/${news.image}`}
                    alt={news.title} />
                <div className='card-shadow absolute inset-2 sm:h-44 md:h-52 w-[95%]'></div>
                <div className='flex flex-col justify-start gap-3 mt-2 px-3 whitespace-normal break-all sm:w-72 md:w-96'>
                    <h3 className='text-lg font-extrabold xl:text-xl'>
                        {news.title}
                    </h3>
                    <h5 className='hidden md:inline text-base xl:text-lg max-h-52'>
                        {news.description}
                    </h5>
                    <span className='text-lfs self-start border-l-4 border-red-900 pl-3 mt-3'>
                        {news.category}
                    </span>
                </div>
            </Link>
        )
        :
        (
            <Link className='border-b-2 border-las pb-2 mb-2 text-sm font-semibold xs:text-base xs:font-bold' to='#'>
                <h2 className=''>
                    {news.title}
                </h2>
                <span className='text-lfs self-start border-l-4 border-red-900 pl-3'>
                    {news.category}
                </span>
            </Link>
        )
}

export default NewsCard