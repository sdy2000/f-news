import React from 'react'
import { Link } from 'react-router-dom'

const LastestNews = ({ news, showDescription = false }) => {
    return (
        <Link className='relative col-span-1 row-span-1' to='#'>
            <img
                className='h-full object-cover'
                src={`/assets/img/${news.image}`}
                alt="News img" />

            <div className='card-shadow absolute inset-0 flex flex-col justify-end items-end gap-2 px-3 py-4'>
                <h2 className='text-las text-2xl font-extrabold'>
                    {news.title}
                </h2>
                {
                    showDescription &&
                    <h3 className='text-lap text-sm font-bold'>
                        {news.description}
                    </h3>
                }
                <span className='text-lap self-start border-l-4 border-red-900 pl-3'>
                    {news.category}
                </span>
            </div>

        </Link>
    )
}

export default LastestNews