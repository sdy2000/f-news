import React from 'react'
import { Link } from 'react-router-dom'

const XsNewsCard = ({title, category, slug}) => {
    return (
        <Link className='border-b-2 border-las w-full dark:border-das pb-2 mb-2 text-sm font-semibold xs:text-base xs:font-bold'
         to={`/news/${slug}`}>
            <h2 className='text-p '>
                {title}
            </h2>
            <span className='text-t self-start border-l-4 border-red-900 pl-3'>
                {category}
            </span>
        </Link>
    )
}

export default XsNewsCard