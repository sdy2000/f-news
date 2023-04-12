import React from 'react'

const AccountButton = ({value, icon}) => {
    return (
        <button type='submit' className='button-ac'>
            {value}{icon}
        </button>
    )
}

export default AccountButton