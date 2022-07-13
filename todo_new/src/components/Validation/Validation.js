import React, { useEffect, useState } from 'react';
import './Validation.css'

function Validation() {
    const [userName, setUserName] = useState('')//імя юзера
    const [users, setUsers] = useState(localStorage.getItem('Users') || [])
    const [isValid, setValid] = useState(false) //якщо валидний інпут

    useEffect(() => {
        if (userName !== '') {
            setValid(true)
        }
    }, [userName])

    useEffect(() => {//перевіряємо чи є данні -> загружаємо
        const data = window.localStorage.getItem('Users')
        if (data !== null) setUsers(JSON.parse(data))
    }, [])

    useEffect(() => {// як є зміни в списку користувачів - то запишемо localStorage
        window.localStorage.setItem('Users', JSON.stringify(users))
    }, [users])

    const addUser = () => {
        if (!users.includes(userName)) {
            console.log(users.userName);
            setUsers([
                ...users,
                userName,
            ])

            setUserName('')//сброс ніка 
            //       window.localStorage.setItem('Users', JSON.stringify(users))
        }
    }

    const keyPress = (e) => {
        const code = e.keyCode || e.which
        if (code === 13) {
            addUser()
        }
    }

    return (
        <div>
            <div className="wrapper">
                <input
                    type="text"
                    placeholder="Введіть нікнейм"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    onKeyPress={(e) => keyPress(e)}
                    maxLength='6'
                />
                <button
                    type="submit"
                    className="enter"
                    disabled={!isValid}
                    onClick={addUser}
                >Ввійти</button>
                <label className='tiptop'>Довжина має бути не більше 6 : 6/{userName.length}</label>
            </div>
        </div>
    )
}

export default Validation
