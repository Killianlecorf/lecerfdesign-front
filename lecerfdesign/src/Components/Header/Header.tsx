"use client";
import React, { useState } from 'react';
import './_Header.scss'
import Image from 'next/image';
import NavButton from '../UI-kit/NavButton/NavButton';
import { RxHamburgerMenu } from "react-icons/rx";
import ModalNavigation from '../ModalNavigation/ModalNavigation';
import Button from '../UI-kit/Button/Button';
import Link from 'next/link';
import { IoMdClose } from "react-icons/io";

interface HeaderProps {
    currentPath?: string;
  }

const Header:React.FC<HeaderProps> = ({currentPath}) => {

    const [isOpenNavModal, setIsOpenNavModal] = useState<boolean>(false)

    const changeOpenModal = ()=> {
        setIsOpenNavModal(!isOpenNavModal)
    }

    return (
        <div className='Header'>
            <div className="ButtonHeader">
                <div className="headerContent">
                    <div className="buttonNavContent">
                        <Link href="/logo">
                            {currentPath === '/logo' ? (
                                <NavButton ButtonContent='Logos' ButtonStyle={{color: "var(--Main-color)"}}/>
                            ) : (
                                <NavButton ButtonContent='Logos'/>
                            )}
                        </Link>
                    </div>
                    <div className="buttonNavContent">
                    <Link href="/webdesign">
                        {currentPath === '/webdesign' ? (
                            <NavButton ButtonContent='Webdesign' ButtonStyle={{ color: "var(--Main-color)" }} />
                        ) : (
                            <NavButton ButtonContent='Webdesign' />
                        )}
                    </Link>
                    </div>
                    <div className="logoContentHeader">
                        <Link href="/">
                            <Image src="/Assets/Img/logo_vert.svg" width={0} height={0} alt='Logo Lecerf Design'/>
                        </Link>
                    </div>
                    <div className="buttonNavContent">
                        <Link href="/printed">
                            {currentPath === '/printed' ? (
                                <NavButton ButtonContent='Imprimés' ButtonStyle={{color: "var(--Main-color)"}}/>
                            ) : (
                                <NavButton ButtonContent='Imprimés'/>
                            )}
                        </Link>
                    </div>
                    <div className="buttonNavContent">
                        <Link href="/creations">
                            {currentPath === '/creations' ? (
                                <NavButton ButtonContent='Créations' ButtonStyle={{color: "var(--Main-color)"}}/>
                            ) : (
                                <NavButton ButtonContent='Créations'/>
                            )}
                        </Link>
                    </div>
                    <div className="BurgerModaleHeader">
                        <div onClick={changeOpenModal}>
                            {
                                !isOpenNavModal ? <RxHamburgerMenu className={`burger`} /> : <IoMdClose className={`burger`}/>
                            }
                        </div>
                    </div>
                </div>
                <div className="ButtonContactHeader">
                    <Link href="/contact">
                        <Button ButtonContent='Contact' ButtonClassName='Button'/>
                    </Link>
                </div>
            </div>
            <Image src="/Assets/Img/bar_header.svg" width={0} height={0} alt="Header" />
            <ModalNavigation isOpen={isOpenNavModal} setIsOpen={setIsOpenNavModal}/>
        </div>
    );
};

export default Header;