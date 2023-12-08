import React from 'react';
import './_webdesignContent.scss'
import Image from 'next/image';

const WebdesignContent = () => {
    return (
        <div className='webdesignContent'>
              <div className="webdesignImage">
                    <div className="firstWebdesign">
                        <Image src="/Assets/Img/webdesign_1.jpg" width={277} height={234} alt='' />
                        <Image src="/Assets/Img/webdesign_2.jpg" width={277} height={287} alt='' />
                        <Image src="/Assets/Img/webdesign_3.jpg" width={277} height={234} alt='' />
                    </div> 
                    <div className="secondWebdesign">
                        <Image src="/Assets/Img/webdesign_4.jpg" width={575} height={369} alt='' />
                        <Image src="/Assets/Img/webdesign_5.jpg" width={277} height={369} alt='' />
                    </div> 
                    <div className="webdesignResponsive">
                        <Image src="/Assets/Img/webdesign_1_responsive.jpg" width={240} height={114} alt='' />
                        <Image src="/Assets/Img/webdesign_2_responsive.jpg" width={240} height={114} alt='' />
                        <Image src="/Assets/Img/webdesign_3_responsive.jpg" width={240} height={114} alt='' />
                        <Image src="/Assets/Img/webdesign_4_responsive.jpg" width={240} height={114} alt='' />
                        <Image src="/Assets/Img/webdesign_5_responsive.jpg" width={240} height={114} alt='' />
                    </div>
              </div>
        </div>
    );
};

export default WebdesignContent;