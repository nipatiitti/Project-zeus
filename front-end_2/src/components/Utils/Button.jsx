import React from 'react'

const Button = ({
    children,
    type = '',
    variant = 'normal',
    onClick = () => {}
}) => (
    <button
        type={type}
        className={`button button-${variant}`}
        onClick={onClick}
    >
        {children}
    </button>
)

export default Button
