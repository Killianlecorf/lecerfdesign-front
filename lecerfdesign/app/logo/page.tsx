import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import LogoImageContent from '@/Components/LogoImageContent/LogoImageContent';
import React from 'react';

const logo = () => {
    
    return (
        <div className='logoPage'>
            <Header currentPath="/logo"/>
            <LogoImageContent />
            <Footer/>
        </div>
    );
};

export default logo;