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

    useEffect(() => {
        window.innerWidth >= 650 ?
            setShowImgCard(true) : setShowImgCard(false);
    }, [])

    return showImgCard
        ?
        (
            <Link className='relative w-full inline-block p-2 hover:scale-105 ease-in-out duration-500' to='#'>
                <img
                    className='sm:h-36 md:h-40 w-full object-cover'
                    src={`/assets/img/${news.image}`}
                    alt={news.title} />
                <div className='card-shadow absolute inset-2 sm:h-36 md:h-40 sm:w-56 md:w-72'></div>
                <div className='flex flex-col justify-start gap-3 mt-2 px-3 whitespace-normal break-all sm:w-56 md:w-72'>
                    <h3 className='text-lg font-extrabold xl:text-xl'>
                        {news.title}
                    </h3>
                    <h5 className='hidden md:inline text-base xl:text-lg max-h-20 overflow-hidden'>
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

export default NewsCard