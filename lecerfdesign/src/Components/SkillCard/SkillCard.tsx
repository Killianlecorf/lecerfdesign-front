import React from 'react';
import './_SkillCard.scss'
import Image from 'next/image';
import Button from '../UI-kit/Button/Button';

interface ISkillCard {
    SkillImage: string;
    SkillLogo: string;
    SkillDescription: string;
    SkillImageAlt?: string;
}

const SkillCard:React.FC<ISkillCard> = ({SkillImage, SkillLogo, SkillDescription, SkillImageAlt = ''}) => {
    return (
        <div className='SkillCard'>
            <div className="imageSkillContent">
                <Image src={SkillImage} alt={SkillImageAlt}/>
            </div>
            <div className="logoSkillContent">
                <Image src={SkillLogo} alt={SkillImageAlt}/>
            </div>
            <div className="descriptionSkillCardContent">
                <p>{SkillDescription}</p>
            </div>
            <div className="SkillButtonContent">
                <Button ButtonContent='Voir plus' ButtonClassName='ButtonArrow'/>
            </div>
        </div>
    );
};

export default SkillCard;
