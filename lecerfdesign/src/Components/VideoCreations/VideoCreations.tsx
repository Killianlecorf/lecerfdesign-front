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
                <VideoCreationComponents imageSrc={videoTeste} textContent='Restau du Coeur de laSeine-Normandie Rouen' secondTextContent='En mars 2024, ce sont 99,2 tonnes de nourriture collectées en seulement 2 jours !' redirectionLink=''/>
                <VideoCreationComponents imageSrc={videoRNR} textContent='Rouen Normandie Rugby RNR' secondTextContent="Découvrez les coulisses du shooting photo des nouveaux maillots du RNR !" redirectionLink=''/>
                <VideoCreationComponents imageSrc={videoFooding} textContent='Studio 63 Rouen'secondTextContent="Visitez les coulisses d&apos;une séance photo de Fooding au Studio le 63 à Rouen !" redirectionLink=''/>
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