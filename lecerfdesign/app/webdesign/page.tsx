import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import WebdesignContent from '@/Components/WebdesignContent/WebdesignContent';
import React from 'react';

const webdesign = () => {
    return (
        <div>
            <Header currentPath="/webdesign"/>
            <WebdesignContent />
            <Footer />
        </div>
    );
};

export default webdesign;