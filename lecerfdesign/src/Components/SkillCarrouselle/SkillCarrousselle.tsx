import React from 'react';
import './_SkillCarrousselle.scss'
import SkillCard from '../SkillCard/SkillCard';
import skillImageLogo from "../../../public/Assets/Img/skillLogo.svg";
import logoLogo from "../../../public/Assets/Img/logoLogo.svg";
import skillImageWebDesign from "../../../public/Assets/Img/skillwebdesign.svg";
import logoWebDesign from "../../../public/Assets/Img/logowebdesign.svg";
import { SlArrowRight, SlArrowLeft  } from "react-icons/sl";
import { TbPointFilled } from "react-icons/tb";

const SkillCarrousselle = () => {
    return (
        <div className='SkillCarrousselle'>
            <div className="SkillCardContentArrow">
                <div className="ArrowSkillCarrousselleContent">
                    <SlArrowLeft />
                </div>
                <div className="SkillCarrousselleContent">
                    <SkillCard SkillImage={skillImageLogo} SkillLogo={logoLogo} SkillDescription='Découvrez notre galerie de logos, chaque création porte en elle une histoire ! '/>
                    <SkillCard SkillImage={skillImageWebDesign} SkillLogo={logoWebDesign} SkillDescription="Explorez nos créations de webdesign, porteuses de visions, l'inspiration visuelle pour votre présence en ligne idéale !"/>
                </div>
                <div className="ArrowSkillCarrousselleContent">
                    <SlArrowRight />
                </div>
            </div>
            <div className="bulletPointSkillCarrousselle">
                <span style={{color: 'var(--Main-color)'}}><TbPointFilled /></span>
                <span><TbPointFilled /></span>
                <span><TbPointFilled /></span>
                <span><TbPointFilled /></span>
            </div>
        </div>
    );
};

export default SkillCarrousselle;
