import React from 'react'
import LastestNews from '../../components/card/LastestNews'


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
    image: 'img2.jpg',
    slug: 'dolor-sit',
    category: 'lorem',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consectetur nisi earum, id eum non.'
  },
  {
    newsId: 3,
    title: 'Lorem ipsum dolor sit amet consectetur',
    image: 'img3.jpg',
    slug: 'dolor-sit',
    category: 'lorem',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consectetur nisi earum, id eum non.'
  },
  {
    newsId: 4,
    title: 'Lorem ipsum dolor sit amet consectetur',
    image: 'img4.jpg',
    slug: 'dolor-sit',
    category: 'lorem',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consectetur nisi earum, id eum non.'
  },
  {
    newsId: 5,
    title: 'Lorem ipsum dolor sit amet consectetur',
    image: 'img5.jpg',
    slug: 'dolor-sit',
    category: 'lorem',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consectetur nisi earum, id eum non.'
  },
]

const Home = () => {
  console.log(lastNews.reverse());
  return (
    <>
      <div className='container mt-10 md:mt-16 lg:mt-20'>
        <div className='grid grid-cols-2 gap-3 h-80'>
          <div className='col-span-1'>
            <LastestNews news={lastNews.pop()} showDescription={true} />
          </div>
          <div className='col-span-1 grid grid-cols-2 grid-rows-2 gap-3'>
            {lastNews.map(news => (
              <LastestNews news={news} key={news.newsId} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home