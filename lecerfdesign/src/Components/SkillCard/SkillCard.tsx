import React from 'react';
import './_SkillCard.scss'
import Image from 'next/image';
import Button from '../UI-kit/Button/Button';
import Link from 'next/link';

interface ISkillCard {
    SkillImage: string;
    SkillLogo: string;
    SkillDescription: string;
    skillPath: string;
    SkillImageAlt?: string;
}

const SkillCard:React.FC<ISkillCard> = ({SkillImage, SkillLogo, SkillDescription, skillPath, SkillImageAlt = ''}) => {
    return (
        <div className='SkillCard'>
            <div className="imageSkillContent">
                <Image src={SkillImage} width={400} height={400} alt={SkillImageAlt} priority  />
            </div>
            <div className="logoSkillContent">
                <Image src={SkillLogo} width={400} height={400} alt={SkillImageAlt} priority/>
            </div>
            <div className="descriptionSkillCardContent">
                <p>{SkillDescription}</p>
            </div>
            <div className="SkillButtonContent">
                <Link href={skillPath}>
                    <Button ButtonContent='Voir plus' ButtonClassName='ButtonArrow'/>
                </Link>
            </div>
        </div>
    );
};

export default SkillCard;
