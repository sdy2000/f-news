import React from 'react'
import { LastNews, LastestNews, NewsScrollBar } from '../../components'

const lastNews = [
  {
    newsId: 1,
    title: 'Lorem ipsum dolor sit amet consectetur',
    image: 'img1.jpg',
    slug: 'dolor-sit',
    category: 'lorem',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consectetur nisi earum, id eum non.'
  },
  {
    newsId: 2,
    title: 'Lorem ipsum dolor sit amet consectetur',
    image: 'wp4026872.jpg',
    slug: 'dolor-sit',
    category: 'lorem',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consectetur nisi earum, id eum non.'
  },
  {
    newsId: 3,
    title: 'Lorem ipsum dolor sit amet consectetur',
    image: 'wallpaperflare.com_wallpaper (43).jpg',
    slug: 'dolor-sit',
    category: 'lorem',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consectetur nisi earum, id eum non.'
  },
  {
    newsId: 4,
    title: 'Lorem ipsum dolor sit amet consectetur',
    image: 'img2.jpg',
    slug: 'dolor-sit',
    category: 'lorem',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consectetur nisi earum, id eum non.'
  },
  {
    newsId: 5,
    title: 'Lorem ipsum dolor sit amet consectetur',
    image: 'wallpaperflare.com_wallpaper (22).jpg',
    slug: 'dolor-sit',
    category: 'lorem',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consectetur nisi earum, id eum non.'
  },
]

const mianNews = [
  {
    newsId: 1,
    title: 'Lorem ipsum dolor sit amet consectetur',
    image: 'img3.jpg',
    slug: 'dolor-sit',
    category: 'lorem',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consectetur nisi earum, id eum non.'
  },
  {
    newsId: 2,
    title: 'Lorem ipsum dolor sit amet consectetur',
    image: 'wallpaperflare.com_wallpaper (11).jpg',
    slug: 'dolor-sit',
    category: 'lorem',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consectetur nisi earum, id eum non.'
  },
  {
    newsId: 3,
    title: 'Lorem ipsum dolor sit amet consectetur',
    image: 'wallpaperflare.com_wallpaper (17).jpg',
    slug: 'dolor-sit',
    category: 'lorem',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consectetur nisi earum, id eum non.'
  },
  {
    newsId: 4,
    title: 'Lorem ipsum dolor sit amet consectetur',
    image: 'wallpaperflare.com_wallpaper (20).jpg',
    slug: 'dolor-sit',
    category: 'lorem',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consectetur nisi earum, id eum non.'
  },
  {
    newsId: 5,
    title: 'Lorem ipsum dolor sit amet consectetur',
    image: 'wp4026879.jpg',
    slug: 'dolor-sit',
    category: 'lorem',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consectetur nisi earum, id eum non.'
  },
]

const Home = () => {
  return (
    <>
      <div className='container mt-10 md:mt-16 lg:mt-20'>
        {/* // // // // // // Lastest News */}
        <div className='flex flex-col lg:grid grid-cols-2 gap-3 mb-12'>
          <div className='col-span-1'>
            <LastestNews news={lastNews.pop()} />
          </div>
          <div className='col-span-1 grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-3 mt-4'>
            {
              lastNews.map(news => (
                <LastNews news={news} key={news.newsId} />
              ))
            }
          </div>
        </div>

        {/* // // // // // // News */}
        <div className='flex flex-col justify-start mt-6 sm:gap-6 lg:gap-12'>
          <h2 className='text-lg font-bold md:text-xl md:font-extrabold lg:text-2xl xl:text-3xl border-l-4 border-red-900 pl-3'>
            News
          </h2>

          <NewsScrollBar mianNews={mianNews} />

        </div>
      </div>
    </>
  )
}

export default Home