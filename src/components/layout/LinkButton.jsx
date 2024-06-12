import { Link } from 'react-router-dom';
import React from 'react';

const LinkButton = ({ to, text, className }) => {
    return (
        <Link to={to} className={className}>
            {text}
        </Link>
    );
};

export default LinkButton;
