import React from 'react'

const RecentNewsCard = ({ news }) => {
    return (
        <div className='grid grid-cols-5 xl:grid-cols-6 justify-start items-start gap-3'>
            <img
                className='col-span-2 xl:col-span-3 w-full h-24 object-cover'
                src={`/assets/img/${news.image}`}
                alt={news.title}
            />
            <div className='col-span-3 flex flex-col justify-start items-start'>
                <h4 className='text-p col-span-3'>
                    {news.title}
                </h4>
                <sapn className='text-t mt-4'>
                    {news.createDate}
                </sapn>
            </div>
        </div>
    )
}

export default RecentNewsCard