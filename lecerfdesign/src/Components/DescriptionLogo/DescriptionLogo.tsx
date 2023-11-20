import React from 'react';
import "./_DescriptionLogo.scss";
import Image from 'next/image';
import lecerfLogo from "../../../public/Assets/Img/lecerfdesign_logo.svg"

const DescriptionLogo = () => {
    return (
        <div className='DescriptionLogo'>
            <div className="logoDesignContent">
                <Image src={lecerfLogo} alt='Logo Lecerf Design'/>
            </div>
            <div className="sloganLogoHome">
                <h2>" Donnez vie à votre vision, <span style={{color: "var(--Main-color)"}}>avec des solutions graphiques sur mesure ! "</span></h2>
            </div>
        </div>
    );
};

export default DescriptionLogo; 