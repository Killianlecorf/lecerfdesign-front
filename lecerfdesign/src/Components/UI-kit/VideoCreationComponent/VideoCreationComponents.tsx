import React from 'react';
import './VideoCreationComponents.scss';
import Image, { StaticImageData } from 'next/image';
import Button from '../Button/Button';

interface VideoCreationComponentsProps {
    imageSrc: StaticImageData;
    altText?: string;
    textContent: string;
}

const VideoCreationComponents: React.FC<VideoCreationComponentsProps> = ({ imageSrc, altText = 'Video creation image', textContent }) => {
    return (
        <div className='VideoCreationComponents'>
            <Image src={imageSrc} alt={altText} />
            <div className="textContent">
                <p>{textContent}</p>
            </div>
            <div className="buttonContent">
                <Button ButtonClassName='BigButtonArrow' ButtonContent='Voir la vidéo'/>
            </div>
        </div>
    );
};

export default VideoCreationComponents;
