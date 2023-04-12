import React from 'react'
import IconButton from '../button/IconButton'
import { IoMdClose } from 'react-icons/io'
import { FiUserCheck } from 'react-icons/fi'
import { AccountButton } from '..'

const LoginBoxModal = ({ onClose }) => {
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-[2px]
        flex justify-center items-center z-50'>
            <div className='flex flex-col justify-center items-center gap-4 w-[95%] md:w-[80%] lg:w-[60%] max-w-2xl'>
                <span className='place-self-end bg-accent hover:bg-daccent rounded-full p-1' onClick={() => { onClose() }}>
                    <IconButton value={<IoMdClose />} />
                </span>
                <div className='flex flex-col justify-center items-center gap-8 py-8 px-4 bg-p w-full rounded-2xl'>
                    <h2 className='text-4xl text-p mb-4'>
                        Log in
                    </h2>
                    <form className='flex flex-col justify-center items-center gap-6 w-full'>

                        <div className='form-group'>
                            <label htmlFor="name">UserName or Email :</label>
                            <input
                                type='text'
                                id='name'
                                placeholder='Name or Email'
                                required />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="name">User Name :</label>
                            <input
                                type='text'
                                id='name'
                                placeholder='Name'
                                required />
                        </div>

                        <AccountButton value={'Login'} icon={<FiUserCheck />} style={'mt-6'} />

                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginBoxModal