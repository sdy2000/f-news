import React from 'react'
import { Link } from 'react-router-dom'

const LastestVideoNews = ({ news }) => {
    return (
        <Link className='relative w-full' to={`/news/${news.slug}`}>
            <video className='h-64 w-full md:h-full' controls>
                <source src={`/assets/vide/${news.video}`} />
            </video>
            <div className='card-shadow absolute inset-0 flex flex-col justify-end items-start gap-2 px-3 py-4'>
                <h2 className='text-las self-start text-lg font-bold md:text-2xl md:font-extrabold lg:text-3xl'>
                    {news.title}
                </h2>
                <h3 className='text-lap text-sm lg:text-base font-semibold hidden md:inline-block'>
                    {news.description}
                </h3>
                <span className='text-lap self-start border-l-4 border-red-900 pl-3'>
                    {news.category}
                </span>
            </div>

        </Link>
    )
}

export default LastestVideoNews