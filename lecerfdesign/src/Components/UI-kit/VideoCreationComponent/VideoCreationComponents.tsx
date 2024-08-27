import React from 'react';
import './VideoCreationComponents.scss';
import Image, { StaticImageData } from 'next/image';
import Button from '../Button/Button';

interface VideoCreationComponentsProps {
    imageSrc: StaticImageData;
    altText?: string;
    textContent: string;
    secondTextContent?: string;
}

const VideoCreationComponents: React.FC<VideoCreationComponentsProps> = ({ imageSrc, altText = 'Video creation image', textContent, secondTextContent }) => {
    return (
        <div className='VideoCreationComponents'>
            <div className="imgCreation">
                    <Image src={imageSrc} alt={altText} />
            </div>
            <div className="textContent">
                <p>{textContent}</p>
                <p>{secondTextContent}</p>
            </div>
            <div className="buttonContent">
                <Button ButtonClassName='BigButtonArrow' ButtonContent='Voir la vidéo'/>
            </div>
        </div>
    );
};

export default VideoCreationComponents;
