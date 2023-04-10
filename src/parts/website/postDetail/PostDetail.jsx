import React from 'react'
import { BiTimeFive } from 'react-icons/bi'
import { BsShareFill } from 'react-icons/bs'
import { Parser } from 'html-to-react'


const PostDetail = ({ news }) => {
    return (
        <>
            <div className='mt-12 flex flex-col justify-start gap-3'>
                <h1 className='text-p text-3xl font-semibold md:text-4xl md:font-bold max-w-3xl mb-4'>
                    {news.title}
                </h1>
                <span className='flex justify-start items-center gap-2 text-s'>
                    <BiTimeFive size={18} /> {news.createDate}
                </span>
                <span className='flex justify-start items-center p-3 bg-orange hover:bg-dorange text-dfs hover:scale-110 w-12'>
                    <BsShareFill />
                </span>
                <div className='flex flex-col justify-start mt-8 px-8 '>
                    <div className='flex flex-col justify-start gap-3'>
                        <img
                            className='w-full max-h-[32rem] object-cover'
                            src={`/assets/img/${news.image}`}
                            alt={news.title}
                        />
                        <span className='text-t text-sm border-l border-blue-500 pl-2'>
                           {news.shortDescription}
                        </span>
                        <h4 className='text-p text-lg font-bold'>
                            by {news.authorName}
                        </h4>
                    </div>
                    <div className='flex flex-col justify-start gap-3 text-p'>
                        {Parser().parse(news.description)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostDetail