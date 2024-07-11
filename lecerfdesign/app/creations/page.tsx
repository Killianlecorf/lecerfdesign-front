import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import React from 'react';
import CreationPageVideo from "@/Components/CreationPageVideo/CreationPageVideo";
import Image from 'next/image';
import banniere from "../../public/Assets/Img/bannierecreation.svg";
import CreationBismoulien from '@/Components/CreationBismoulien/CreationBismoulien';
import CardImage from '@/Components/CardImage/CardImage';

const Creations = () => {
    return (
        <div>
            <Header currentPath="/creations"/>
            <CreationPageVideo />
            <div className="banniereCreation">
            </div>
            <CreationBismoulien />
            <div className="otherCreation">
                <div className="titleOtherCreation">
                    <h2>Découvrez d'autres créations uniques et variées, réalisées avec différentes techniques artistiques.</h2>
                </div>
                <div className="iconsOtherCreation">
                    <CardImage 
                        LinkImage='/Assets/Img/tasse.svg' 
                        WidthImage={280} 
                        HeightImage={430} 
                        Title='Illustrations' 
                        Content='Illustrations personnalisées pour des cadeaux ou autres occasions, adaptées aux particuliers' 
                        AltText='Illustrations'
                    />
                    <CardImage 
                        LinkImage='/Assets/Img/rugby.svg' 
                        WidthImage={280} 
                        HeightImage={430} 
                        Title='Partenariat' 
                        Content='Partenariat avec Studio63Rouen et normandie-photo.com' 
                        AltText='Partenariat'
                    />
                    <CardImage 
                        LinkImage='/Assets/Img/krossvinyle.svg' 
                        WidthImage={280} 
                        HeightImage={430} 
                        Title='Illustrations' 
                        Content='Illustrations personnalisées adaptées aux particuliers' 
                        AltText='Illustrations'
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Creations;