import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import PrintedContent from '@/Components/PrintedContent/PrintedContent';
import Head from 'next/head';
import React from 'react';

const Printed = () => {
    return (
        <div>
            <Head>
                <title>Lecerf design | Imprimés</title>
                <meta name="description" content="Description optimisée pour le SEO de votre page." />
                <meta name="keywords" content="Next.js, SEO, Référencement" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
            </Head>
            <Header currentPath="/printed"/>
            <PrintedContent />
            <Footer />
        </div>
    );
};

export default Printed;