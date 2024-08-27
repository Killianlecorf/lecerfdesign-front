import React from 'react';
import "./VideoCreations.scss"
import VideoCreationComponents from '../UI-kit/VideoCreationComponent/VideoCreationComponents';
import videoFooding from '../../../public/Assets/Img/videoFooding.svg';
import videoRNR from '../../../public/Assets/Img/vidéoRNR.svg';
import videoTeste from '../../../public/Assets/Img/vidéoTeste.svg';
import Button from '../UI-kit/Button/Button';

const VideoCreations = () => {
    return (
        <div className='VideoCreation'>
            <div className="videoContentIcon">
                <VideoCreationComponents imageSrc={videoTeste} textContent='Restos du Coeur de la Seine-Normandie Rouen'/>
                <VideoCreationComponents imageSrc={videoRNR} textContent='Club de Rugby RNR' secondTextContent="Shooting nouveau maillot"/>
                <VideoCreationComponents imageSrc={videoFooding} textContent='EXPATMUMCOMPANY'secondTextContent="Interview"/>
            </div>
            <div className="CtoACreation">
                <Button ButtonClassName='BigButtonArrow' ButtonContent='Créez votre vidéo ici' />
            </div>
        </div>
    );
};

export default VideoCreations;