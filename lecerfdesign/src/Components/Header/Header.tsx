"use client";
import React, { useState } from 'react';
import './_Header.scss'
import BarHeader from '../../../public/Assets/Img/bar_header.svg';
import logo from '../../../public/Assets/Img/logo_vert.svg';
import Image from 'next/image';
import NavButton from '../UI-kit/NavButton/NavButton';
import { RxHamburgerMenu } from "react-icons/rx";
import ModalNavigation from '../ModalNavigation/ModalNavigation';

const Header = () => {

    const [isOpenNavModal, setIsOpenNavModal] = useState<boolean>(false)

    const changeOpenModal = ()=> {
        setIsOpenNavModal(!isOpenNavModal)
        console.log(isOpenNavModal);
    }


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
                        <NavButton ButtonContent='Créations'/>
                    </div>
                    <div className="BurgerModaleHeader">
                        <div onClick={changeOpenModal}>
                            <RxHamburgerMenu className={`burger ${isOpenNavModal ? 'active' : ''}`} />
                        </div>
                    </div>
                </div>
            </div>
            <Image src={BarHeader} alt="Header" />
            <ModalNavigation isOpen={isOpenNavModal} setIsOpen={setIsOpenNavModal}/>
        </div>
    );
};

export default Header;