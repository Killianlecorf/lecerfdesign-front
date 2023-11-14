import React from 'react';
import './_NavButton.scss';

interface INavButton {
    ButtonContent: string;
    ButtonClick?: () => void;
}

const NavButton: React.FC<INavButton> = ({ ButtonContent, ButtonClick }) => {
    return (
        <button onClick={ButtonClick} className='NavButton'>{ButtonContent}</button>
    );
};

export default NavButton;
