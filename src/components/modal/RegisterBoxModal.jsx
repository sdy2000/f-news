import React from 'react'
import IconButton from '../button/IconButton'
import { IoMdClose } from 'react-icons/io'
import { AccountButton } from '..'
import { FiUserPlus } from 'react-icons/fi'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const RegisterBoxModal = ({ onClose }) => {
    const [isShowPass, setIsShowPass] = useState(false)
    const [isShowRePass, setIsShowRePass] = useState(false)

    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-[2px]
        flex justify-center items-center z-50'>
            <div className='flex flex-col justify-center items-center gap-4 w-[95%] md:w-[80%] lg:w-[60%] max-w-2xl'>
                <span className='place-self-end bg-accent hover:bg-daccent rounded-full p-1' onClick={() => { onClose() }}>
                    <IconButton value={<IoMdClose />} />
                </span>
                <div className='flex flex-col justify-center items-center gap-8 py-8 px-4 bg-p w-full rounded-2xl'>
                    <h2 className='text-4xl text-p mb-4'>
                        Register
                    </h2>
                    <form className='flex flex-col justify-center items-center gap-6 w-full'>

                        <div className='form-group'>
                            <label htmlFor="name">UserName :</label>
                            <input
                                type='text'
                                id='name'
                                placeholder='User name'
                                required />
                            <p>
                                This filed is required !
                            </p>
                        </div>

                        <div className='form-group'>
                            <label htmlFor="email">Email :</label>
                            <input
                                type='email'
                                id='email'
                                placeholder='User Email'
                                required />
                            <p>
                                This filed is required !
                            </p>
                        </div>

                        <div className='form-group'>
                            <label htmlFor="password">Password :</label>
                            <div className='flex justify-center items-center w-full bg-s rounded-3xl shadow-lg pr-4'>
                                <input
                                    type={isShowPass ? 'text' : 'password'}
                                    id='password'
                                    placeholder='Password'
                                    required />
                                {
                                    !isShowPass
                                        ?
                                        <BsEye
                                            onClick={() => { setIsShowPass(true) }}
                                            className='text-p hover:scale-110 cursor-pointer duration-300'
                                            size={30} />
                                        :
                                        <BsEyeSlash
                                            onClick={() => { setIsShowPass(false) }}
                                            className='text-p hover:scale-110 cursor-pointer duration-300'
                                            size={30} />
                                }
                            </div>
                            <p>
                                This filed is required !
                            </p>
                        </div>

                        <div className='form-group'>
                            <label htmlFor="rePassword">RePassword :</label>
                            <div className='flex justify-center items-center w-full bg-s rounded-3xl shadow-lg pr-4'>
                                <input
                                    type={isShowRePass ? 'text' : 'password'}
                                    id='rePassword'
                                    placeholder='RePassword'
                                    required />
                                {
                                    !isShowRePass
                                        ?
                                        <BsEye
                                            onClick={() => { setIsShowRePass(true) }}
                                            className='text-p hover:scale-110 cursor-pointer duration-300'
                                            size={30} />
                                        :
                                        <BsEyeSlash
                                            onClick={() => { setIsShowRePass(false) }}
                                            className='text-p hover:scale-110 cursor-pointer duration-300'
                                            size={30} />
                                }
                            </div>
                            <p>
                                This filed is required !
                            </p>
                        </div>

                        <div className='flex flex-col gap-2 w-[100%] sm:w-[80%]'>
                            <div className='flex gap-4'>
                                <input
                                    type='checkbox'
                                    id='rule'
                                    required />
                                <label htmlFor="rule" className='text-p text-lg'>
                                    I have read and accept the
                                    <Link className='text-red-600 hover:underline hover:text-accent ml-2' to='#'><b>rules and regulations</b></Link>
                                </label>
                            </div>
                            <p className='text-accent text-sm'>
                                This filed is required !
                            </p>
                        </div>


                        <AccountButton value={'Register'} icon={<FiUserPlus />} />

                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterBoxModal