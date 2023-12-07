import Image from 'next/image';
import React from 'react';
import './_LogoImageContent.scss';

const LogoImageContent = () => {
    return (
        <div className='LogoImageContent'>
            <div className="imageContent">
                <div className="logoContent1">
                    <Image src="/Assets/Img/logo_1.jpg" width={277} height={307} alt='logo Noble Site' />
                    <Image src="/Assets/Img/logo_4.jpg" width={277} height={336} alt='Mock-up'/>
                    <Image src="/Assets/Img/logo_7.jpg" width={277} height={336} alt='Mock-up'/>
                    <Image src="/Assets/Img/logo_10.jpg" width={277} height={336} alt='Mock-up' />
                </div>
                <div className="logoContent2">
                    <Image src="/Assets/Img/logo_2.jpg" width={277} height={279} alt='Logo O&apos;ZOO' />
                    <Image src="/Assets/Img/logo_5.jpg" width={277} height={438} alt='Mock-up' />
                    <Image src="/Assets/Img/logo_8.jpg" width={277} height={279} alt='Mock-up' />
                </div>
                <div className="logoContent3">
                    <Image src="/Assets/Img/logo_3.jpg" width={277} height={440} alt='Mock-up' />
                    <Image src="/Assets/Img/logo_6.jpg" width={277} height={336} alt='Mock-up' />
                    <Image src="/Assets/Img/logo_9.jpg" width={277} height={336} alt='Mock-up'/>
                </div>
            </div>
            <div className="imageContentResponsive">
                    <Image src="/Assets/Img/logo_1_responsive.jpg" width={240} height={114} alt='logo Noble Site' />
                    <Image src="/Assets/Img/logo_2_responsive.jpg" width={240} height={114} alt='Mock-up'/>
                    <Image src="/Assets/Img/logo_3_responsive.jpg" width={240} height={114} alt='Mock-up'/>
                    <Image src="/Assets/Img/logo_4_responsive.jpg" width={240} height={114} alt='Mock-up' />
                    <Image src="/Assets/Img/logo_5_responsive.jpg" width={240} height={114} alt='logo Noble Site' />
                    <Image src="/Assets/Img/logo_6_responsive.jpg" width={240} height={114} alt='Mock-up'/>
                    <Image src="/Assets/Img/logo_7_responsive.jpg" width={240} height={114} alt='Mock-up'/>
                    <Image src="/Assets/Img/logo_8_responsive.jpg" width={240} height={114} alt='Mock-up' />
                    <Image src="/Assets/Img/logo_9_responsive.jpg" width={240} height={114} alt='logo Noble Site' />
                    <Image src="/Assets/Img/logo_10_responsive.jpg" width={240} height={114} alt='Mock-up'/>
            </div>
        </div>
    );
};

export default LogoImageContent;