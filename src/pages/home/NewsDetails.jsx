import React from 'react'
import { IconButton, PostDetailBar } from '../../components'
import { BiTimeFive } from 'react-icons/bi'
import { BsShareFill } from 'react-icons/bs'


const NewsDetails = () => {
    return (
        <>
            <div className='bg-s'>
                <PostDetailBar />
                <div className='container mt-12 flex flex-col justify-start gap-3'>
                    <h1 className='text-p text-3xl font-semibold md:text-4xl md:font-bold max-w-3xl mb-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit, Eligendi repudiandae.
                    </h1>
                    <span className='flex justify-start items-center gap-2 text-s'>
                        <BiTimeFive size={18} />32 March
                    </span>
                    <span className='flex justify-start items-center p-3 bg-orange hover:bg-dorange text-s hover:scale-110 w-12'>
                        <BsShareFill />
                    </span>
                </div>
            </div>
        </>
    )
}

export default NewsDetails