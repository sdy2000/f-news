import React from 'react'
import { Link } from 'react-router-dom'

const listData = [
    { newsId: 1, title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', slug: 'Lorem' },
    { newsId: 2, title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', slug: 'Lorem' },
    { newsId: 3, title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', slug: 'Lorem' },
    { newsId: 4, title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', slug: 'Lorem' },
    { newsId: 5, title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', slug: 'Lorem' },
]

const ListLastest = () => {
    return (
        <>
            <div className='w-full sticky top-0'>
                <span className='bg-orange text-white sm:text-xs md:text-sm lg:text-base xl:text-lg p-3 inline-block font-semibold w-full'>
                    LASTEST BUSINESS NEWS
                </span>
                <ul className='news-list'>
                    {
                        listData.map((news, idx) => (
                            <li className='p-8 sm:py-8 sm:px-3 lg:p-8 -mt-1 text-white hover:text-lft duration-300' key={news.newsId}>
                                <Link className='h-full w-full flex sm:flex-col lg:flex-row justify-center items-center gap-4' to={`${news.slug}`}>
                                    <span className='bg-orange rounded-full py-3 px-5 sm:text-sm lg:text-lg font-bold'>
                                        {idx + 1}
                                    </span>
                                    <p className='sm:text-sm lg:text-base xl:text-lg sm:max-h-24 overflow-hidden sm:text-center lg:text-start'>
                                        {news.title}
                                    </p>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default ListLastest