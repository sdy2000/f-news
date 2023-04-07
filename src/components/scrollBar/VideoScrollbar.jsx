import React from 'react'
import IconButton from '../button/IconButton';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const VideoScrollbar = () => {
    const slider = document.getElementById('slider');

    const slideLeft = () => {
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const slideRight = () => {
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    return (
        <div className='relative grid grid-cols-1 sm:flex sm:justify-start sm:items-center'>
            <IconButton value={<MdChevronLeft className='hidden sm:inline' size={50} onClick={() => slideLeft()} />} />
            <div id='slider' className='flex flex-col justify-start items-start gap-3 sm:flex-row
                w-full h-full sm:overflow-x-scroll sm:scroll sm:whitespace-nowrap sm:scroll-smooth scrollbar-hide'>
                videoCard
            </div>
            <IconButton value={<MdChevronRight className='hidden sm:inline' size={50} onClick={() => slideRight()} />} />
        </div>
    )
}

export default VideoScrollbar