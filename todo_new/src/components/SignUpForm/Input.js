import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function Input({
    id, className, label, error, ...attrs
}) {
    const classes = classNames(
        'input',
        'className',
        { error },
    );

    return (
        <div className="inputWrapper">
            {label &&
                <label className="inputLabel" htmlFor={id}>{label}</label>
            }
            {attrs.requred &&
                <span className="inputRequired">Required</span>}
            <input
                name={id}
                id={id}
                className={classes}
                {...attrs}
            />
            {error &&
                <span className="inputError">{error}</span>
            }
        </div>
    );
}
Input.protoTypes = {
    id: PropTypes.string.isRequired,// клчевой на нем вся логика
    classNames: PropTypes.string, //для стилизации компонента
    label: PropTypes.string,//название инпута
    error: PropTypes.string,//поле ошибки
}

Input.defaultProps = {
    className: '',
    label: '',
    error: '',
}

export default Input
