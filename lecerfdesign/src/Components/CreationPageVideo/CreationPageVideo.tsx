import React from 'react';
import './CreationPageVideo.scss'
import VideoCreations from '../VideoCreations/VideoCreations';

const CreationPageVideo = () => {
    return (
        <div className='CreationPageVideo'>
            <div className="titleCreation">
                <h1>Plongez vous dans un monde créatif unique !</h1>
                <p>Découvrez nos derniers projets vidéo !</p>
            </div>
            <VideoCreations />
        </div>
    );
};

export default CreationPageVideo;