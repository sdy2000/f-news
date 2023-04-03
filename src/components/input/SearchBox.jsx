import React from 'react'
import { IconButton } from '..'
import { FaSearch } from 'react-icons/fa'

const SearchBox = () => {
    return (
        <div className='flex justify-center items-center gap-1 bg-dbs rounded-3xl overflow-hidden w-64 px-2'>
            <IconButton value={<FaSearch />} />
            <input
                className='w-full bg-dbs px-2 text-lap outline-none'
                type='text'
                readOnly />
        </div>
    )
}

export default SearchBox