import React from 'react';
import "./CardLogo.scss";

interface CardLogoProps {
    LinkImage: string; 
    WidthImage: number;
    HeightImage: number;
    Title: string;
    Content: string;
    AltText: string;
}

const CardLogo: React.FC<CardLogoProps> = ({ LinkImage, WidthImage, HeightImage, Title, Content, AltText }) => {
    return (
        <div className='card'>
            <img src={LinkImage} width={WidthImage} height={HeightImage} alt={AltText} />
            <div className="hoverImage">
                <div className="sizeCard">
                    <h2>{Title}</h2>
                    <p>{Content}</p>
                </div>
            </div>
        </div>
    );
};

export default CardLogo;
