import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaList, FaSearch } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { IconButton, LoginBoxModal, SearchBox, SearchBoxModal, SocialBox, ThemeButton } from '../../components'
import useScrollDirection from '../../utils/windowEvent/useScrollDirection'

const Header = () => {
  const [isOpenList, setIsOpenList] = useState(false);
  const [isVisibleSearchBox, setIsVisibleSearchBox] = useState(false);
  const [isVisibleLoginBox, setIsVisibleLoginBox] = useState(false);
  const scrollDirection = useScrollDirection();



  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024) {
        setIsOpenList(false);
      }
    })
  }, [])

  function OpenList() {
    (isOpenList === true) ? setIsOpenList(false) : setIsOpenList(true);
  }
  return (
    <>
      <header className={`sticky ${scrollDirection === "down" ? "-top-24" : "top-0"}
       transition-all duration-500 bg-lbh dark:bg-dbh md:py-2 z-30`}>
        <nav className='container flex justify-between items-center gap-3 p-3 md:pb-1'>


          <div className='lg:hidden'>
            <span onClick={OpenList}>
              <IconButton value={<FaList />} />
            </span>
          </div>
          <div className='flex justify-center items-center gap-6'>
            <Link className='text-dfp text-xl md:text-2xl lg:text-3xl font-black' to="/">
              <span className='text-accent'>F</span>
              News
            </Link>
            <ul className='desktop-nav text-las lg:text-lg hidden lg:flex justify-center items-center gap-6 ml-12'>
              <li><Link to="#">Home</Link></li>
              <li><Link to="#">News</Link></li>
              <li><Link to="#">About Us</Link></li>
              <li><Link to="#">Contact Us</Link></li>
            </ul>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <span>
              <ThemeButton />
            </span>
            <span className='xl:hidden' onClick={() => { setIsVisibleSearchBox(true) }}>
              <IconButton value={<FaSearch />} />
            </span>
            <span className='hidden xl:inline' onClick={() => { setIsVisibleSearchBox(true) }}>
              <SearchBox />
            </span>
            <span className='hidden lg:inline'>
              <ul className='flex justify-center items-center gap-1 text-lap'>
                <li onClick={() => { setIsVisibleLoginBox(true) }}>
                  <Link to='#'>
                    Login
                  </Link>
                </li>
                /
                <li>
                  <Link to='#'>
                    Singup
                  </Link>
                </li>
              </ul>
            </span>
          </div>
          <div className={`mobile-nav fixed inset-0 bg-lbp dark:bg-dbp py-16 px-5 overflow-auto
                     overscroll-contain z-10 border-l-2 border-l-las dark:border-l-lft lg:hidden
                     ${!isOpenList ? 'translate-x-[100%] invisible' : 'translate-x-[20%] visible'}`}>

            <span onClick={OpenList} className='nav-close-btn absolute top-5 right-[25%]'>
              <IconButton value={<IoMdClose />} />
            </span>
            <div className='mobile-nav-wrapper'>
              <div className='flex flex-col gap-5 ml-[20%]'>
                <img
                  className='rounded-full border-2 border-lfp dark:border-lft'
                  src="/assets/img/sdy2000.jpg"
                  alt="User Avatar"
                  width='120' height='120' />
                <ul className='flex justify-start items-center gap-2'>
                  <li><Link to="#">Login</Link></li>
                  <li>\</li>
                  <li><Link to="#">singout</Link></li>
                </ul>
              </div>
            </div>
            <div className='mobile-nav-wrapper'>
              <h3 className='title'>Main Menu</h3>
              <ul>
                <li><Link to="#">Home</Link></li>
                <li><Link to="#">News</Link></li>
                <li><Link to="#">Citizen reporter</Link></li>
                <li><Link to="#">About Us</Link></li>
                <li><Link to="#">Contact</Link></li>
              </ul>
            </div>

            <div className='ml-[10%] md:mr-[50%]'>
              <SocialBox styles={'socail-icons flex items-center justify-center gap-3'} />
            </div>

          </div>

        </nav>
      </header>
      {isVisibleSearchBox && <SearchBoxModal onClose={() => setIsVisibleSearchBox(false)} />}
      {isVisibleLoginBox && <LoginBoxModal onClose={() => setIsVisibleLoginBox(false)} />}
    </>
  )
}

export default Header