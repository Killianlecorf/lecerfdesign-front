import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import WebdesignContent from '@/Components/WebdesignContent/WebdesignContent';
import Head from 'next/head';
import React from 'react';

const webdesign = () => {
    return (
        <div>
            <Head>
                <title>Lecerf design | Web design</title> 
                <meta name="description" content="Donnez vie à votre vision, avec des solutions graphiques sur mesure !" />
                <meta name="keywords" content="Design, Rouen, lecerf" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
            </Head>
            <Header currentPath="/webdesign"/>
            <WebdesignContent />
            <Footer />
        </div>
    );
};

export default webdesign;