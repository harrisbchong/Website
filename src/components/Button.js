import React from 'react';
import './Button.css';
import resume from "./Harris_Chong_Resume.pdf"

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <a
            href={resume}
            target='_blank'
            rel="noreferrer">
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}>
                {children}
            </button>
        </a>
    );
};