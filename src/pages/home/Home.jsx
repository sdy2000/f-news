import React from 'react'
import { LastNews, LastestNews, NewsScrollBar, NewsType } from '../../components'

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

const reverseMianNews = [
  {
    newsId: 5,
    title: 'Lorem ipsum dolor sit amet consectetur',
    image: 'wp4026879.jpg',
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
    newsId: 3,
    title: 'Lorem ipsum dolor sit amet consectetur',
    image: 'wallpaperflare.com_wallpaper (17).jpg',
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
    newsId: 1,
    title: 'Lorem ipsum dolor sit amet consectetur',
    image: 'img3.jpg',
    slug: 'dolor-sit',
    category: 'lorem',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consectetur nisi earum, id eum non.'
  },
]

const weedendReasd = [
  {
    newsId: 3,
    title: 'Lorem ipsum dolor sit amet consectetur',
    image: 'wallpaperflare.com_wallpaper (17).jpg',
    slug: 'dolor-sit',
    category: 'lorem',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consectetur nisi earum, id eum non.'
  },
  {
    newsId: 1,
    title: 'Lorem ipsum dolor sit amet consectetur',
    image: 'img3.jpg',
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
  {
    newsId: 2,
    title: 'Lorem ipsum dolor sit amet consectetur',
    image: 'wallpaperflare.com_wallpaper (11).jpg',
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
        <NewsType newsName={'News'} data={mianNews} color={'border-red-900'} />

        {/* // // // // // // News */}
        <NewsType newsName={'Sport'} data={reverseMianNews} color={' border-yellow-500'} />

        {/* // // // // // // Weekend Reads */}
        <NewsType newsName={'Weedend Reads'} data={weedendReasd} color={' border-blue-600'} />

      </div>
    </>
  )
}

export default Home