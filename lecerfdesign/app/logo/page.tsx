import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import React from 'react';

const logo = () => {
    
    return (
        <div className='logoPage'>
            <Header currentPath="/logo"/>
            <Footer/>
        </div>
    );
};

export default logo;