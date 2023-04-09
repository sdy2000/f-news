import React from 'react'
import { Link } from 'react-router-dom'
import { BsListNested } from 'react-icons/bs'

const PostDetailBar = () => {
    return (
        <div className='bg-p'>
            <div className='bg-accent dark:bg-daccent border-b-2 hidden sm:flex'>
                <div className='container py-3'>
                    <h2 className='text-3xl font-semibold text-dfp'>
                        News
                    </h2>
                </div>
            </div>
            <div className='bg-accent dark:bg-daccent'>
                <div className='container flex justify-between items-center'>
                    <ul className='news-bar'>
                        <li><Link to='#'>Home</Link></li>
                        <li><Link to='#'>Climate</Link></li>
                        <li><Link to='#'>Video</Link></li>
                        <li><Link to='#'>World</Link></li>
                        <li><Link to='#'>Business</Link></li>
                        <li><Link to='#'>Tech</Link></li>
                        <li><Link to='#'>Science</Link></li>
                        <li><Link to='#'>Stories</Link></li>
                    </ul>

                    <h2 className='text-3xl font-semibold text-dfp sm:hidden'>
                        News
                    </h2>

                    <div className='text-dfp my-2 sm:px-0 sm:pl-3 sm:my-0 sm:py-2
                      sm:border-l-2 border-lft hover:underline'>
                        <span className='flex justify-center items-center rounded-sm border sm:border-none px-3 py-1'>
                            <BsListNested size={25} /> More
                        </span>
                    </div>
                </div>
            </div>
            <div className='container py-2'>
                <ul className='news-subbar'>
                    <li><Link to='#'>World</Link></li>
                    <li><Link to='#'>Africa</Link></li>
                    <li><Link to='#'>Asia</Link></li>
                    <li><Link to='#'>Australia</Link></li>
                    <li><Link to='#'>Europe</Link></li>
                    <li><Link to='#'>Lathi America</Link></li>
                    <li><Link to='#'>Middle East</Link></li>
                    <li><Link to='#'>US & Canada</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default PostDetailBar