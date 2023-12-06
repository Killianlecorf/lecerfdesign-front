"use client";
import React, { useState } from 'react';
import './_Header.scss'
import Image from 'next/image';
import NavButton from '../UI-kit/NavButton/NavButton';
import { RxHamburgerMenu } from "react-icons/rx";
import ModalNavigation from '../ModalNavigation/ModalNavigation';
import Button from '../UI-kit/Button/Button';
import Link from 'next/link';

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
                        <NavButton ButtonContent='Log'/>
                    </div>
                    <div className="buttonNavContent">
                        <NavButton ButtonContent='Webdesign'/>
                    </div>
                    <div className="logoContentHeader">
                        <Link href="/">
                            <Image src="/Assets/Img/logo_vert.svg" width={0} height={0} alt='Logo Lecerf Design'/>
                        </Link>
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
                <div className="ButtonContactHeader">
                    <Link href="/contact">
                        <Button ButtonContent='Contact' ButtonClassName='ButtonArrow'/>
                    </Link>
                </div>
            </div>
            <Image src="/Assets/Img/bar_header.svg" width={0} height={0} alt="Header" />
            <ModalNavigation isOpen={isOpenNavModal} setIsOpen={setIsOpenNavModal}/>
        </div>
    );
};

export default Header;