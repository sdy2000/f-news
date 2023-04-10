import React from 'react'

const TopStroryCard = ({ story }) => {
  return (
    <div className='flex flex-col justify-start gap-3 border-b-2'>
      <h4 className='text-p font-bold lg:font-extrabold font-serif'>
        {story.title}
      </h4>
      <span className='text-t text-xs'>
        {story.createDate}
      </span>
    </div>
  )
}

export default TopStroryCard