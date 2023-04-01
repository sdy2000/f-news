import React from 'react'

const IconButton = ({ value }) => {
    return (
        <button className='flex justify-center items-center text-2xl rounded-full w-10 h-10
         text-lft bg-las hover:bg-accent hover:text-white
          dark:text-dft dark:bg-das dark:hover:bg-accent dark:hover:text-white
          transition-all duration-500'>
            {value}
        </button>
    )
}

export default IconButton