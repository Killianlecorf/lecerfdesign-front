import React from 'react';
import './_ModalNavigation.scss';
import NavButton from '../UI-kit/NavButton/NavButton';

interface IModalNavigation {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

const ModalNavigation: React.FC<IModalNavigation> = ({ isOpen, setIsOpen }) => {
    
    const closeNavModale = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <div className={`ModalNavigation-${isOpen ? "open" : "close"}`}>
                <div className="ButtonNavContent">
                    <NavButton ButtonContent='Accueil' />
                </div>
                <div className="ButtonNavContent">
                    <NavButton ButtonContent='Logos' />
                </div>
                <div className="ButtonNavContent">
                    <NavButton ButtonContent='Webdesign' />
                </div>
                <div className="ButtonNavContent">
                    <NavButton ButtonContent='Imprimés' />
                </div>
                <div className="ButtonNavContent">
                    <NavButton ButtonContent='Mes créations' />
                </div>
                <div className="ButtonNavContent">
                    <NavButton ButtonContent='Contact' />
                </div>
            </div>
            <div onClick={closeNavModale} className={`backNavModal-${isOpen ? "open" : "close"}`}></div>
        </div>
    );
};

export default ModalNavigation;
