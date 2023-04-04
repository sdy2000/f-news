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
            <Link className='sm:w-72 sm:h-44 md:w-96 md:h-52  inline-block p-2 hover:scale-105 ease-in-out duration-500' to='#'>
                <img
                    className='h-full w-full object-cover'
                    src={`/assets/img/${news.image}`}
                    alt="News img" />

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