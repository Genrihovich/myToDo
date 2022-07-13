import React, { useEffect, useState } from 'react';
import './Validation.css'

function Validation() {
    const [userName, setUserName] = useState('')//імя юзера
    const [users, setUsers] = useState(localStorage.getItem('Users') || [])
    const [isValid, setValid] = useState(false) //якщо валидний інпут

    useEffect(() => {
        console.log(userName);
        console.log('до' + isValid);
        if (userName !== '') {
            setValid(true)
            console.log('после' + isValid);
        }
    }, [userName])

    useEffect(() => {//перевіряємо чи є данні -> загружаємо
        const data = window.localStorage.getItem('Users')
        if (data !== null) setUsers(JSON.parse(data))
    }, [])

    useEffect(() => {// як є зміни в списку користувачів - то запишемо localStorage
        window.localStorage.setItem('Users', JSON.stringify(users))
    }, [users])

    const AddUser = () => {
        if (!users.includes(userName)) {
            setUsers([
                ...users,
                userName,
            ])
            setUserName('')//сброс ніка
        }
    }

    const keyPress = (e) => {
        const code = e.keyCode || e.which
        if (code === 13) {
            AddUser()
        }
    }
    //=============== тут пробросіть isValid, userName
    return (
        isValid,
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
                    onClick={AddUser}
                >Ввійти</button>
                <label className='tiptop'>Довжина має бути не більше 6 : 6/{userName.length}</label>
            </div>
        </div>
    )
}

export default Validation
