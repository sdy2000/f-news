import React from 'react'

const AccountButton = ({value, icon, style}) => {
    return (
        <button type='submit' className={`button-ac ${style}`}>
            {value}{icon}
        </button>
    )
}

export default AccountButton