import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import React from 'react';
import CreationPageVideo from "@/Components/CreationPageVideo/CreationPageVideo";
import Image from 'next/image';
import banniere from "../../public/Assets/Img/bannierecreation.svg";
import CreationBismoulien from '@/Components/CreationBismoulien/CreationBismoulien';

const Creations = () => {
    return (
        <div>
            <Header currentPath="/creations"/>
            <CreationPageVideo />
            <div className="banniereCreation">
                <Image src={banniere} alt='bannière de design' />
            </div>
            <CreationBismoulien />
            <Footer />
        </div>
    );
};

export default Creations;