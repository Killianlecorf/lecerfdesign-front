import React from 'react';
import "./BismoulienIcon.scss";
import Image, { StaticImageData } from 'next/image';

interface BismoulienIcon {
    Bismoulien: StaticImageData;
    BismoulienName: string;
    altImage?: string;
}


const BismoulienIcon: React.FC<BismoulienIcon> = ({Bismoulien,BismoulienName, altImage= "Personnage d'animation"}) => {
    return (
        <div className='BismoulienIcon'>
            <Image src={Bismoulien} alt={altImage} />
            <div className="textContentBismoulien">
                <p>{BismoulienName}</p>
            </div>
        </div>
    );
};

export default BismoulienIcon;
