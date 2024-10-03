import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ text, to }) => {
    return (
        <Link to={to} className="button-link">
            {text}
        </Link>
    );
};

export default Button;