import React from 'react'
import { useState } from 'react'

const Users = () => {
    const [userName, setUserName] = useState()

    return (
        <>
            <button className="btnUser btn btn-outline-success">Вход</button>
            <input className='user' placeholder='Ввод пользователя'></input>
        </>




    )
}

export default Users
