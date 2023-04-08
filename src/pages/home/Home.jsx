import React from 'react'
import {
  LastNews, ListLastest, LastestNews, NewsCardSmall,
  NewsType, NewSection, NewsCard2, LastestVideoNews, VideoScrollbar
} from '../../components'
import { HiArrowLongRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

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

const sportNews = [
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

const reelNews = [
  {
    newsId: 5,
    title: 'Lorem ipsum dolor sit amet consectetur',
    image: 'wallpaperflare.com_wallpaper (22).jpg',
    slug: 'dolor-sit',
    category: 'lorem',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consectetur nisi earum, id eum non.'
  },
  {
    newsId: 1,
    title: 'Lorem ipsum dolor sit amet consectetur',
    image: 'img1.jpg',
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
]

const editorPicks = [
  {
    newsId: 2,
    title: 'Lorem ipsum dolor sit amet consectetur',
    image: 'wp4026872.jpg',
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
    newsId: 1,
    title: 'Lorem ipsum dolor sit amet consectetur',
    image: 'img1.jpg',
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
  {
    newsId: 3,
    title: 'Lorem ipsum dolor sit amet consectetur',
    image: 'wallpaperflare.com_wallpaper (43).jpg',
    slug: 'dolor-sit',
    category: 'lorem',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consectetur nisi earum, id eum non.'
  },
  {
    newsId: 6,
    title: 'Lorem ipsum dolor sit amet consectetur',
    image: 'wallpaperflare.com_wallpaper (11).jpg',
    slug: 'dolor-sit',
    category: 'lorem',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consectetur nisi earum, id eum non.'
  },

  {
    newsId: 7,
    title: 'Lorem ipsum dolor sit amet consectetur',
    image: 'wallpaperflare.com_wallpaper (20).jpg',
    slug: 'dolor-sit',
    category: 'lorem',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consectetur nisi earum, id eum non.'
  },
]

const businessNews = [
  {
    newsId: 1,
    title: 'Lorem ipsum dolor sit amet consectetur',
    image: 'img1.jpg',
    slug: 'dolor-sit',
    category: 'lorem',
    about: 'Lorem and Lorem',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consectetur nisi earum, id eum non.'
  },
  {
    newsId: 2,
    title: 'Lorem ipsum dolor sit amet consectetur',
    image: 'wallpaperflare.com_wallpaper (11).jpg',
    slug: 'dolor-sit',
    category: 'lorem',
    about: 'Lorem and Lorem',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consectetur nisi earum, id eum non.'
  },
]

const videoNews = {
  newsId: 1,
  title: 'Lorem ipsum dolor sit amet consectetur',
  video: 'test-video.mp4',
  slug: 'dolor-sit',
  category: 'lorem',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consectetur nisi earum, id eum non.'
}


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
        <NewsType newsName={'Sport'} data={sportNews} color={' border-yellow-500'} />

        {/* // // // // // // Weekend Reads */}
        <NewsType newsName={'Weedend Reads'} data={weedendReasd} color={' border-blue-600'} />
      </div>

      {/* // // // // // // Reel News */}
      <NewSection
        title={'REEL'}
        description={'The most amazing videos from the FNews'}
        lastNews={reelNews} />

      {/* // // // // // // Editor's Picks */}
      <div className='container'>
        <div className='flex justify-between items-center mb-6'>
          <h2 className={`text-lg font-bold md:text-xl md:font-extrabold lg:text-2xl xl:text-3xl
             border-l-4 border-sky-700 pl-3`}>
            Editor's Picks
          </h2>
          <Link to='#' className='font-bold flex justify-center items-center hover:text-accent duration-500'>
            See more <HiArrowLongRight size={25} />
          </Link>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>

          <div className='col-span-2'>
            <div className='flex flex-col gap-3 mb-12'>
              <div className='lg:inline-block'>
                <LastestNews news={editorPicks.pop()} />
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4'>
                {
                  editorPicks.map(news => (
                    <NewsCardSmall news={news} key={news.newsId} />
                  ))
                }
              </div>
            </div>
          </div>

          <div className='col-span-1 relative'>
            <ListLastest />
          </div>

        </div>
      </div>


      {/* // // // // // // Reel News */}
      <NewSection
        title={'Future Planet'}
        description={'The most amazing videos from the FNews'}
        lastNews={reelNews} />

      {/* // // // // // //  Business News */}
      <div className='container my-12'>
        <div className='flex flex-col sm:flex-row justify-center items-center gap-3'>
          {
            businessNews.map(news => (
              <NewsCard2 news={news} key={news.newsId} />
            ))
          }
        </div>
      </div>

      {/* // // // // // //  Video News */}
      <div className='container my-12'>
        <span className='self-start text-lg font-bold md:text-2xl md:font-extrabold lg:text-3xl border-l-4 border-blue-900 pl-3'>
          Featured video
        </span>
        <div className='flex flex-col justify-start mt-3 sm:bg-llist'>
          <LastestVideoNews news={videoNews} />

          <VideoScrollbar vNews={sportNews} />
        </div>
      </div>

      {/* // // // // // // More around the FNews */}
      <div className='container'>
        <div className='flex justify-between items-center mb-6'>
          <h2 className={`text-lg font-bold md:text-xl md:font-extrabold lg:text-2xl xl:text-3xl
            border-l-4 border-sky-700 pl-3`}>
            More around the FNews
          </h2>
          <Link to='#' className='font-bold flex justify-center items-center hover:text-accent duration-500'>
            See more <HiArrowLongRight size={25} />
          </Link>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>

          <div className='col-span-1 relative'>
            <ListLastest />
          </div>

          <div className='col-span-2'>
            <div className='flex flex-col gap-3 mb-12'>
              <div className='lg:inline-block'>
                <LastestNews news={editorPicks.pop()} />
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4'>
                {
                  editorPicks.map(news => (
                    <NewsCardSmall news={news} key={news.newsId} showDescription={false} />
                  ))
                }
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home