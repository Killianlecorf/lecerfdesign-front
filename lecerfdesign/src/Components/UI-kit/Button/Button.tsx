    import React from 'react';
    import './_Button.scss';

    interface IButton {
        ButtonContent: string;
        ButtonClick?: () => void;
        ButtonStyle?: React.CSSProperties ;
    }


    const Button: React.FC<IButton> = ({ ButtonContent, ButtonClick, ButtonStyle }) => {
        return (
            <button style={ButtonStyle} onClick={ButtonClick} className='Button'>{ButtonContent}</button>
        );
    };

    export default Button;