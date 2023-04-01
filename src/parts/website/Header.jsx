import React from 'react'
import { Link } from 'react-router-dom'
import { FaList, FaSearch } from 'react-icons/fa'
import { IconButton, ThemeButton } from '../../components'

const Header = () => {
  return (
    <>
      <header className='bg-dbh'>
        <nav className='container flex justify-between items-center gap-3 p-3 md:pb-1'>


          <div className=''>
            <IconButton value={<FaList />} />
          </div>
          <div className='flex justify-center items-center gap-6'>
            <Link className='text-dfp text-xl xl:text-3xl font-black' to="/">
              <span className='text-accent'>F</span>
              News
            </Link>
            <ul className='desktop-nav  hidden lg:flex justify-center items-center gap-6 ml-12'>
              <li><Link to="#">Home</Link></li>
              <li><Link to="#">Blogs</Link></li>
              <li><Link to="#">About Us</Link></li>
              <li><Link to="#">Contact Us</Link></li>
            </ul>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <span>
              <ThemeButton />
            </span>
            <span>
              <IconButton value={<FaSearch />} />
            </span>
          </div>


        </nav>
      </header>
    </>
  )
}

export default Header