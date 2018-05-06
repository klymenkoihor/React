import React from 'react';
import './styles.css';

const Button = ({children, size, color='red', ...rest}) => {
    const sizeClass = size ? `size-${size}` : 'size-big';
    return (
        <button
            className={`${sizeClass} ${color}`}
            {...rest}
        >
            {children}
        </button>)
};

export default Button;
