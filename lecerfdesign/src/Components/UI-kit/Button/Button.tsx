    import React from 'react';
    import './_Button.scss';
    import { ImArrowRight2 } from "react-icons/im";

    interface IButton {
        ButtonContent: string;
        ButtonClick?: () => void;
        ButtonStyle?: React.CSSProperties ;
        ButtonClassName: string;
    }


    const Button: React.FC<IButton> = ({ ButtonContent, ButtonClick, ButtonStyle, ButtonClassName }) => {
        return (
            <button style={ButtonStyle} onClick={ButtonClick} className={ButtonClassName}><p>{ButtonContent}</p><span><ImArrowRight2 /></span></button>
        );
    };

    export default Button;