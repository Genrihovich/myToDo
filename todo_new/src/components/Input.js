import React from 'react';
import classNames from 'classnames';// допомогає при формуванні динамічних классів та об'єднанні класів
import PropTypes from 'prop-types';//дозволяє перевіряти типи даних, що надходять у компонент у вигляді пропсів
import './Input.css';

function Input({
    id, className, label, errors, maxLength, ...attrs
}) {
    const classes = classNames(//формуємо класси, які будуть задаваться input-у
        'input',
        className,
        { errors }
    );
    const labelCount = maxLength ?
        <span className="inputError">[{maxLength}/{attrs.value.length}]</span> :
        <span className="inputError"> </span>

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
                maxLength={maxLength}
                {...attrs}
            />
            {(errors || maxLength) &&
                <span className="inputError">{errors} {labelCount}</span>
            }
        </div>
    );
};

Input.protoTypes = {
    id: PropTypes.string.isRequired,// ключовий на ньому уся логіка
    classNames: PropTypes.string, //для стилізації компонента
    label: PropTypes.string,//назва інпута
    errors: PropTypes.string, //кількість символів
}

Input.defaultProps = {
    className: '',
    label: '',
    errors: '',
}

export default Input;
