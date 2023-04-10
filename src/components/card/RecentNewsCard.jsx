import React from 'react'

const RecentNewsCard = ({ news }) => {
    return (
        <div className='col-span-1 grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-6 justify-start items-start gap-3'>
            <img
                className='col-span-1 lg:col-span-2 xl:col-span-3 w-full h-32 sm:h-28 lg:h-24 object-cover'
                src={`/assets/img/${news.image}`}
                alt={news.title}
            />
            <div className='col-span-1 lg:col-span-3 flex flex-col justify-start items-start'>
                <h4 className='text-p font-semibold col-span-3 font-serif'>
                    {news.title}
                </h4>
                <span className='text-t mt-2 lg:mt-4'>
                    {news.createDate}
                </span>
            </div>
        </div>
    )
}

export default RecentNewsCard