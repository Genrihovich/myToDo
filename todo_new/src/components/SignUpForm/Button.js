import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Button.css'

const Button = ({
    children,//дані, які будуть передаватися кнопці,які вона буде відображати
    onClick,
    className,// пропс для стилізації ізвнє компонента
    disabled,// чи задізебленна кнопка
    active,//знаходиться в актимному стані
    ...attrs
}) => {

    const classes = classNames(// формуємо класи, які будуть задаватися кнопці
        'btn',
        className,
        { active },
    );

    return (
        <button
            className={classes}
            disabled={disabled}
            onClick={onClick}
            {...attrs}
        >
            {children}
        </button>
    );

};
Button.prototype = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
};
Button.defaultProps = {
    children: 'Default Button',
    onClick: () => { },
    className: '',
    disabled: false,
    active: true,
};

export default Button