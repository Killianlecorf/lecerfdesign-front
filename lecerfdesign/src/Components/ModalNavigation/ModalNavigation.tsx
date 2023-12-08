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
                    <Link href="/webdesign">
                        <NavButton ButtonContent='Webdesign' />
                    </Link>
                </div>
                <div className="ButtonNavContent">
                    <Link href="/printed">
                        <NavButton ButtonContent='Imprimés' />
                    </Link>
                </div>
                <div className="ButtonNavContent">
                    <Link href="/creations">
                        <NavButton ButtonContent='Mes créations' />
                    </Link>
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
