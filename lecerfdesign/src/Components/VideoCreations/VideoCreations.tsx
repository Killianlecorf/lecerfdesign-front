import React from 'react';
import "./VideoCreations.scss"
import VideoCreationComponents from '../UI-kit/VideoCreationComponent/VideoCreationComponents';
import videoFooding from '../../../public/Assets/Img/videoFooding.svg';
import videoRNR from '../../../public/Assets/Img/vidéoRNR.svg';
import videoTeste from '../../../public/Assets/Img/vidéoTeste.svg';
import Button from '../UI-kit/Button/Button';
import Link from 'next/link';

const VideoCreations = () => {
    return (
        <div className='VideoCreation'>
            <div className="videoContentIcon">
                <VideoCreationComponents imageSrc={videoTeste} textContent='Restos du Coeur de la Seine-Normandie Rouen' redirectionLink=''/>
                <VideoCreationComponents imageSrc={videoRNR} textContent='Club de Rugby RNR' secondTextContent="Shooting nouveau maillot" redirectionLink=''/>
                <VideoCreationComponents imageSrc={videoFooding} textContent='EXPATMUMCOMPANY'secondTextContent="Interview" redirectionLink=''/>
            </div>
            <div className="CtoACreation">
                <Link href='/contact'>
                    <Button ButtonClassName='BigButtonArrow' ButtonContent='Créez votre vidéo ici' />
                </Link>
            </div>
        </div>
    );
};

export default VideoCreations;