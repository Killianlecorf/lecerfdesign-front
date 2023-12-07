import React from 'react';
import './_ModalNavigation.scss';
import NavButton from '../UI-kit/NavButton/NavButton';
import Link from 'next/link';

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
                    <Link href="/">
                        <NavButton ButtonContent='Accueil' />
                    </Link>
                </div>
                <div className="ButtonNavContent">
                    <Link href="/logo">
                        <NavButton ButtonContent='Logos' />
                    </Link>
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
                    <Link href="/contact">
                        <NavButton ButtonContent='Contact' />
                    </Link>
                </div>
            </div>
            <div onClick={closeNavModale} className={`backNavModal-${isOpen ? "open" : "close"}`}></div>
        </div>
    );
};

export default ModalNavigation;
