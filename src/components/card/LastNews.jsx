import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const LastNews = ({ news }) => {
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
            <Link className='relative col-span-1 row-span-1 overflow-hidden
             hover:scale-105 transition-all duration-500' to='#'>
                <img
                    className='h-full object-cover'
                    src={`/assets/img/${news.image}`}
                    alt="News img" />

                <div className='card-shadow absolute inset-0 flex flex-col justify-end items-end gap-2 px-3 py-4'>
                    <h2 className='text-las text-lg font-bold lg:text-xl'>
                        {news.title}
                    </h2>
                    <span className='text-lap self-start border-l-4 border-red-900 pl-3'>
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

export default LastNews