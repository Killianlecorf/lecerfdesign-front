import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import React from 'react';
import CreationPageVideo from "@/Components/CreationPageVideo/CreationPageVideo";

const Creations = () => {
    return (
        <div>
            <Header currentPath="/creations"/>
            <CreationPageVideo />
            <Footer />
        </div>
    );
};

export default Creations;