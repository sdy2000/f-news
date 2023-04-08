import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='bg-llist'>
            <div className='container mt-8 py-6 px-8 flex flex-col justify-start' >
                <div className='flex flex-col justify-start'>
                    <h2 className='text-lg text-dfp font-bold'>
                        Explore the <span className='text-accent'>F</span>News
                    </h2>
                    <ul className='footer-list'>
                        <li><Link to='#'>Home</Link></li>
                        <li><Link to='#'>News</Link></li>
                        <li><Link to='#'>Sport</Link></li>
                        <li><Link to='#'>Weather</Link></li>
                        <li><Link to='#'>iPlayer</Link></li>
                        <li><Link to='#'>Sounds</Link></li>
                        <li><Link to='#'>Biteize</Link></li>
                        <li><Link to='#'>CBesbies</Link></li>
                        <li><Link to='#'>CFNews</Link></li>
                        <li><Link to='#'>Food</Link></li>
                    </ul>
                </div>
                <div className='flex flex-col items-start py-4'>
                    <ul className='footer-list2'>
                        <li><Link to='#'>Terms of Use</Link></li>
                        <li><Link to='#'>About the FNews</Link></li>
                        <li><Link to='#'>Privacy Policy</Link></li>
                        <li><Link to='#'>Cookies</Link></li>
                        <li><Link to='#'>Accessibility Help</Link></li>
                        <li><Link to='#'>Parental Guidance</Link></li>
                        <li><Link to='#'>Contact the FNews</Link></li>
                        <li><Link to='#'>Made an editorial complaint</Link></li>
                        <li><Link to='#'>FNews emails for you</Link></li>
                    </ul>
                </div>
                <p className="text-dfp pb-4 md:mt-8">
                    &copy; Copyright 2023 <a href="/#"><span className='text-accent'>F</span>News</a>
                </p>
            </div>
        </footer>
    )
}

export default Footer