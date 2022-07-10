import React, { useEffect, useState } from 'react';
import './Validation.css'






function Validation() {
    const [userName, setUserName] = useState('')
    //  const [isValid, setValid] = useState(false)

    useEffect(() => {
        if (userName.length === 6) {
            console.log('уже 6');
        }
    }, [userName])




    return (
        <div>
            <div className="wrapper">
                <input
                    type="text"
                    placeholder="Введіть нікнейм"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <button type="submit" className="enter">Ввійти</button>
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
