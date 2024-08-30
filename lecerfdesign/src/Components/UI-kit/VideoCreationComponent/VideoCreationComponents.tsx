import React from 'react';
import './VideoCreationComponents.scss';
import Image, { StaticImageData } from 'next/image';
import Button from '../Button/Button';
import Link from 'next/link';

interface VideoCreationComponentsProps {
    imageSrc: StaticImageData;
    altText?: string;
    textContent: string;
    secondTextContent?: string;
    redirectionLink: string;
}

const VideoCreationComponents: React.FC<VideoCreationComponentsProps> = ({ imageSrc, altText = 'Video creation image', textContent, secondTextContent, redirectionLink }) => {
    return (
        <div className='VideoCreationComponents'>
            <div className="imgCreation">
                    <Image src={imageSrc} alt={altText} />
            </div>
            <div className="textContent">
                <p className='principalText'>{textContent}</p>
                <p className='secondaryText'>{secondTextContent}</p>
            </div> 
            <div className="buttonContent">
                <Link href={redirectionLink}>
                    <Button ButtonClassName='BigButtonArrow' ButtonContent='Voir le site'/>
                </Link>
            </div>
        </div>
    );
};

export default VideoCreationComponents;
