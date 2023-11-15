import React from 'react';
import './_Button.scss';

interface IButton {
    ButtonContent: string;
    ButtonClick?: () => void;
}


const Button: React.FC<IButton> = ({ ButtonContent, ButtonClick }) => {
    return (
        <button onClick={ButtonClick} className='Button'>{ButtonContent}</button>
    );
};

export default Button;