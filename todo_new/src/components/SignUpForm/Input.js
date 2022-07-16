import React, { useState } from 'react';
import classNames from 'classnames';// помогает при формировани динаич классов и обьединении класов
import PropTypes from 'prop-types';//позволяет проверять типы данных, поступающие в компонент в виде пропсов
import './Input.css';

function Input({
    id, className, label, error, onChange, ...attrs
}) {
    const classes = classNames(//формируем классы, которые будут задаваться input-у
        'input',
        'className',
        { error },
    );

    const [userName, setUserName] = useState('')

    const onNameChangeHandler = (e) => {
        setUserName(e.target.value)
    }
    if (error) {
        error += (attrs.maxLength + ' [' + attrs.maxLength + '/' + userName.length) + ']'
    }


    return (
        <div className="inputWrapper">
            <div className="labelsWrapper">
                {label &&
                    <label className="inputLabel" htmlFor={id}>{label}</label>
                }
                {attrs.required &&
                    <span className="inputRequired">Required</span>}
            </div>
            <input
                name={id}
                id={id}
                className={classes}
                onChange={onNameChangeHandler}
                {...attrs}
            />
            {error &&
                <span className="inputError">{error}</span>
            }
        </div>
    );
};

Input.protoTypes = {
    id: PropTypes.string.isRequired,// ключевой на нем вся логика
    classNames: PropTypes.string, //для стилизации компонента
    label: PropTypes.string,//название инпута
    error: PropTypes.string,//поле ошибки
    onChange: PropTypes.func,
}

Input.defaultProps = {
    className: '',
    label: '',
    error: '',
    onChange: () => { },
}

export default Input;
