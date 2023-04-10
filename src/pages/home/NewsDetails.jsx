import React from 'react'
import { PostDetailBar, RecentNewsCard } from '../../components'
import { PostDetail } from '../../parts'

const news = {
    newsId: 5,
    title: 'Lorem ipsum dolor sit amet consectetur',
    image: 'wallpaperflare.com_wallpaper (22).jpg',
    slug: 'dolor-sit',
    category: 'lorem',
    createDate: '2023/4/10',
    authorName: 'sajad.Dy',
    shortDescription: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, a quod.',
    description: '<div><h1>The Second Example</h1><p>The <strong>rat</strong> hates the <strong>cat</strong></p><p><i>This is something special</i></p><hr/><div><img src="http://localhost:3000/assets/img/img1.jpg" width="500"/></div> <hr/><h4>Just Another Heading</h4></div><div><h1>The Second Example</h1><p>The <strong>rat</strong> hates the <strong>cat</strong></p><p><i>This is something special</i></p><hr/><div></div> <hr/><h4>Just Another Heading</h4></div><div><h1>The Second Example</h1><p>The <strong>rat</strong> hates the <strong>cat</strong></p><p><i>This is something special</i></p><hr/><div></div> <hr/><h4>Just Another Heading</h4></div><div><h1>The Second Example</h1><p>The <strong>rat</strong> hates the <strong>cat</strong></p><p><i>This is something special</i></p><hr/><div><img src="http://localhost:3000/assets/img/img1.jpg" width="500"/></div> <hr/><h4>Just Another Heading</h4></div><div><h1>The Second Example</h1><p>The <strong>rat</strong> hates the <strong>cat</strong></p><p><i>This is something special</i></p><hr/><div></div> <hr/><h4>Just Another Heading</h4></div><div><h1>The Second Example</h1><p>The <strong>rat</strong> hates the <strong>cat</strong></p><p><i>This is something special</i></p><hr/><div></div> <hr/><h4>Just Another Heading</h4></div>',
}

// const topStores = [
//     {
//         newsId: 1,
//         title: 'Lorem ipsum dolor sit amet consectetur',
//         createDate: '2023/4/10',,
//     },
//     {
//         newsId: 2,
//         title: 'Lorem ipsum dolor sit amet consectetur',
//         createDate: '2023/4/10',,
//     },
//     {
//         newsId: 3,
//         title: 'Lorem ipsum dolor sit amet consectetur',
//         createDate: '2023/4/10',,
//     },
// ]

const recentNews = [
    {
        newsId: 1,
        title: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur',
        image: 'wallpaperflare.com_wallpaper (22).jpg',
        createDate: '2023/4/10',
    },
    {
        newsId: 2,
        title: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur',
        image: 'wallpaperflare.com_wallpaper (22).jpg',
        createDate: '2023/4/10',
    },
    {
        newsId: 3,
        title: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur',
        image: 'wallpaperflare.com_wallpaper (22).jpg',
        createDate: '2023/4/10',
    },
    {
        newsId: 4,
        title: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur',
        image: 'wallpaperflare.com_wallpaper (22).jpg',
        createDate: '2023/4/10',
    },
    {
        newsId: 5,
        title: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur',
        image: 'wallpaperflare.com_wallpaper (22).jpg',
        createDate: '2023/4/10',
    },
    {
        newsId: 6,
        title: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur',
        image: 'wallpaperflare.com_wallpaper (22).jpg',
        createDate: '2023/4/10',
    },
    {
        newsId: 7,
        title: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur',
        image: 'wallpaperflare.com_wallpaper (22).jpg',
        createDate: '2023/4/10',
    },
    {
        newsId: 8,
        title: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur',
        image: 'wallpaperflare.com_wallpaper (22).jpg',
        createDate: '2023/4/10',
    },
    {
        newsId: 9,
        title: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur',
        image: 'wallpaperflare.com_wallpaper (22).jpg',
        createDate: '2023/4/10',
    },
    {
        newsId: 10,
        title: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur',
        image: 'wallpaperflare.com_wallpaper (22).jpg',
        createDate: '2023/4/10',
    },
]

const NewsDetails = () => {
    return (
        <>
            <div className='bg-s'>
                <PostDetailBar />
                <div className='container grid grid-cols-1 md:grid-cols-3'>
                    <div className='col-span-1 md:col-span-2'>
                        <PostDetail news={news} />
                    </div>

                    <div className='col-span-1 flex flex-col  items-center gap-4'>
                        {/* {
                            topStores.map(story => (
                                <RecentNewsCard news={news} />
                            ))
                        } */}

                        {
                            recentNews.map(news => (
                                <RecentNewsCard news={news} />
                            ))
                        }
                    </div>
                </div>

            </div>
        </>
    )
}

export default NewsDetails