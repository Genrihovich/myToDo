import React, { useEffect, useState } from 'react';
import './Validation.css'






function Validation() {
    const [userName, setUserName] = useState('')
    const [users, setUsers] = useState(localStorage.getItem('Users') || [])
    //  const [isValid, setValid] = useState(false)

    useEffect(() => {
        const data = window.localStorage.getItem('Users')
        if (data !== null) 
    }, [])

    const AddUser = () => {
        console.log('gfg');

        return {
            //           isValid
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
                    maxLength='6'
                />
                <button
                    type="submit"
                    className="enter"
                    onClick={AddUser}
                >Ввійти</button>

                <label className='tiptop'>Довжина має бути не більше 6 : 6/{userName.length}</label>
            </div>
            <div className="errors">
                {/* {(user.isDirty && user.isEmpty) && <div>Поле не может быть пустым</div>}
            {(user.isDirty && user.minLengthError) && <div>Длина не может быть меньше 6</div>} */}

            </div>

        </div>

    )
}

export default Validation
