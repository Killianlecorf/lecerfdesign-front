import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import LogoImageContent from '@/Components/LogoImageContent/LogoImageContent';
import Head from 'next/head';
import React from 'react';

const logo = () => {
    
    return (
        <div className='logoPage'>
            <Head>
                <title>Lecerf design | Logo</title>
                <meta name="description" content="Donnez vie à votre vision, avec des solutions graphiques sur mesure !" />
                <meta name="keywords" content="Design, Rouen, lecerf" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
            </Head>
            <Header currentPath="/logo"/>
            <LogoImageContent />
            <Footer/>
        </div>
    );
};

export default logo;