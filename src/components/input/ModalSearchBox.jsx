import React from 'react'
import {IconButton} from '..'
import { FaSearch } from 'react-icons/fa'

const ModalSearchBox = () => {
    return (
        <div className='flex justify-center items-center gap-1 bg-dbs rounded-3xl overflow-hidden
         w-full px-4 py-2'>
            <IconButton value={<FaSearch />} />
            <input
                className='w-full bg-dbs px-2 text-lap outline-none'
                type='text' />
        </div>
    )
}

export default ModalSearchBox