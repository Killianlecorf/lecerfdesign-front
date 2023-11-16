import React from 'react';
import "./_SpeIcon.scss"
import Image from 'next/image';

interface ISpeIcon {
    SrcImg: string;
    SpeContent: string;
}

const SpeIcon:React.FC<ISpeIcon> = ({SrcImg, SpeContent}) => {
    return (
        <div className='SpeIcon'>
            <div className="speIconCercle">
                <Image src={SrcImg} alt='Icon de Spécialité'/>
            </div>
            <p>{SpeContent}</p>
        </div>
    );
};

export default SpeIcon;