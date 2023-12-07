import React from 'react';
import './_NavButton.scss';

interface INavButton {
    ButtonContent: string;
    ButtonStyle?: React.CSSProperties ;
    ButtonClick?: () => void;
}

const NavButton: React.FC<INavButton> = ({ ButtonContent, ButtonStyle, ButtonClick }) => {
    return (
        <button onClick={ButtonClick} style={ButtonStyle} className='NavButton'>{ButtonContent}</button>
    );
};

export default NavButton;
