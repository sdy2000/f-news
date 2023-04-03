import React from 'react'
import { IconButton, ModalSearchBox } from '..'
import { IoMdClose } from 'react-icons/io'

const SearchBoxModal = ({ onClose }) => {
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-[2px]
            flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center gap-4 w-[90%] md:w-[75%] lg:w-[60%]'>
                <span className='place-self-end bg-accent hover:bg-daccent rounded-full p-1' onClick={() => { onClose() }}>
                    <IconButton value={<IoMdClose />} />
                </span>
                <ModalSearchBox />
            </div>
        </div>
    )
}

export default SearchBoxModal