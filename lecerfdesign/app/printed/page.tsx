import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import PrintedContent from '@/Components/PrintedContent/PrintedContent';
import React from 'react';

const Printed = () => {
    return (
        <div>
            <Header currentPath="/printed"/>
            <PrintedContent />
            <Footer />
        </div>
    );
};

export default Printed;