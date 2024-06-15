import React from 'react';
import "./VideoCreations.scss"
import VideoCreationComponents from '../UI-kit/VideoCreationComponent/VideoCreationComponents';
import image from '../../../public/Assets/Img/webdesign_2.jpg';
import Button from '../UI-kit/Button/Button';

const VideoCreations = () => {
    return (
        <div className='VideoCreation'>
            <div className="videoContentIcon">
                <VideoCreationComponents imageSrc={image} textContent=''/>
                <VideoCreationComponents imageSrc={image} textContent=''/>
                <VideoCreationComponents imageSrc={image} textContent=''/>
            </div>
            <div className="CtoACreation">
                <Button ButtonClassName='BigButtonArrow' ButtonContent='Créez votre vidéo ici' />
            </div>
        </div>
    );
};

export default VideoCreations;