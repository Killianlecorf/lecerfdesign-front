import React from 'react';
import "./VideoCreations.scss"
import VideoCreationComponents from '../UI-kit/VideoCreationComponent/VideoCreationComponents';
import image from '../../../public/Assets/Img/webdesign_2.jpg';
import Button from '../UI-kit/Button/Button';

const VideoCreations = () => {
    return (
        <div className='VideoCreation'>
            <div className="videoContentIcon">
                <VideoCreationComponents imageSrc={image} textContent='Restos du Coeur de la Seine-Normandie Rouen'/>
                <VideoCreationComponents imageSrc={image} textContent='Club de Rugby RNR' secondTextContent="Shooting nouveau maillot"/>
                <VideoCreationComponents imageSrc={image} textContent='EXPATMUMCOMPANY'secondTextContent="Interview"/>
            </div>
            <div className="CtoACreation">
                <Button ButtonClassName='BigButtonArrow' ButtonContent='Créez votre vidéo ici' />
            </div>
        </div>
    );
};

export default VideoCreations;