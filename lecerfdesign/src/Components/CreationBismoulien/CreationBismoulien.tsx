import React from 'react';
import "./CreationBismoulien.scss";
import BismoulienIcon from '../BismoulienIcon/BismoulienIcon';
import loupkas from "../../../public/Assets/Img/loupkas.svg";
import luzrod from "../../../public/Assets/Img/Luzrod.svg";
import kross from "../../../public/Assets/Img/Kross.svg";
import Akriuu from "../../../public/Assets/Img/Akriuu.svg";
import Isineuf from "../../../public/Assets/Img/Isineuf.svg";

const CreationBismoulien = ({}) => {
    return (
        <div className='CreationBismoulien'>
            <h2>Création de personnage</h2>
            <p>Donnez Vie à Vos Idées avec des Personnages Animés !</p>
            <div className="BismoulienIconsContent">
                <div className="bismoulienContentIconsWrap">
                    <BismoulienIcon Bismoulien={loupkas} BismoulienName='Loupkas'/>
                    <BismoulienIcon Bismoulien={luzrod} BismoulienName='Luzrod'/>
                    <BismoulienIcon Bismoulien={kross} BismoulienName='Kross'/>
                    <BismoulienIcon Bismoulien={Akriuu} BismoulienName='Akriuu'/>
                    <BismoulienIcon Bismoulien={Isineuf} BismoulienName='Isineuf'/>
                </div>
            </div>
            <div className="separationLine"> </div>
        </div>
    );
};

export default CreationBismoulien;
