"use client";
import React from 'react';
import './_ModalNavigation.scss'

interface IModalNavigation {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

const ModalNavigation:React.FC<IModalNavigation> = ({isOpen, setIsOpen}) => {

    

    return (
        <div className='ModalNavigation'>
            
        </div>
    );
};

export default ModalNavigation;