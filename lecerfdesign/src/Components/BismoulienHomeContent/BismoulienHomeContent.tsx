import React from 'react';
import Image from 'next/image';
import imageBismoulien from "../../../public/Assets/Img/imagebismoulien.svg";
import  './_BismoulienHomeContent.scss'


const BismoulienHomeContent = () => {
    return (
        <div className='BismoulienHomeContent'>
            <div className="ImageBismoulienContent">
                <Image src={imageBismoulien} alt='Création de bismoulien'/>
            </div>
            <div className="TextBismoulienContent">
                
            </div>
        </div>
    );
};

export default BismoulienHomeContent;