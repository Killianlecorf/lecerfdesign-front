import React from 'react';
import './_Header.scss'
import BarHeader from '../../../public/Assets/Img/bar_header.svg';
import logo from '../../../public/Assets/Img/logo_vert.svg';
import Image from 'next/image';
import NavButton from '../UI-kit/NavButton/NavButton';
import Button from '../UI-kit/Button/Button';
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
    return (
        <div className='Header'>
            <div className="ButtonHeader">
                <div className="headerContent">
                    <div className="buttonNavContent">
                        <NavButton ButtonContent='Logos'/>
                    </div>
                    <div className="buttonNavContent">
                        <NavButton ButtonContent='Webdesign'/>
                    </div>
                    <div className="logoContentHeader">
                        <Image src={logo} alt='Logo Lecerf Design'/>
                    </div>
                    <div className="buttonNavContent">
                        <NavButton ButtonContent='Imprimés'/>
                    </div>
                    <div className="buttonNavContent">
                        <NavButton ButtonContent='Vidéos'/>
                    </div>
                    <div className="BurgerModaleHeader">
                        <RxHamburgerMenu />
                    </div>
                </div>
                <div className="ButtonContact">
                    <Button ButtonContent='Contact' />
                </div>
            </div>
            <Image src={BarHeader} alt="Header" />
        </div>
    );
};

export default Header;