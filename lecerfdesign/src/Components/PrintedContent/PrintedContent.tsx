import React from 'react';
import './_printedContent.scss'
import Image from 'next/image';

const PrintedContent = () => {
    return (
        <div className='printedContent'>
            <div className="PrintedImage">
                <div className="firstColumn">
                    <Image src="/Assets/Img/printed_1.jpg" width={277} height={336} alt='' />
                    <Image src="/Assets/Img/printed_4.jpg" width={277} height={377} alt='' />
                </div>
                <div className="secondeColumn">
                    <Image src="/Assets/Img/printed_2.jpg" width={279} height={279} alt='' />
                    <Image src="/Assets/Img/printed_5.jpg" width={279} height={390} alt='' />
                </div>
                <div className="thirdColumn">
                    <Image src="/Assets/Img/printed_3.jpg" width={277} height={387} alt='' />
                    <Image src="/Assets/Img/printed_6.jpg" width={277} height={300} alt='' />
                </div>
                <div className="printedResponsiveImage">
                    <Image src="/Assets/Img/printed_1_responsive.jpg" width={240} height={114} alt='' />
                    <Image src="/Assets/Img/printed_2_responsive.jpg" width={240} height={114} alt='' />
                    <Image src="/Assets/Img/printed_3_responsive.jpg" width={240} height={114} alt='' />
                    <Image src="/Assets/Img/printed_4_responsive.jpg" width={240} height={114} alt='' />
                    <Image src="/Assets/Img/printed_5_responsive.jpg" width={240} height={114} alt='' />
                    <Image src="/Assets/Img/printed_6_responsive.jpg" width={240} height={114} alt='' />
                </div>
            </div>
        </div>
    );
};

export default PrintedContent;