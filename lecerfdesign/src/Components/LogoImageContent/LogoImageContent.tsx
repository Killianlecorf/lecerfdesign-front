import Image from 'next/image';
import React from 'react';
import './_LogoImageContent.scss';

const LogoImageContent = () => {
    return (
        <div className='LogoImageContent'>
            <div className="imageContent">
                <div className="logoContent1">
                    <Image src="/Assets/Img/logo_1.svg" width={277} height={307} alt='logo Noble Site' />
                    <Image src="/Assets/Img/logo_4.svg" width={277} height={336} alt='Mock-up'/>
                    <Image src="/Assets/Img/logo_7.svg" width={277} height={336} alt='Mock-up'/>
                    <Image src="/Assets/Img/logo_10.svg" width={277} height={336} alt='Mock-up' />
                </div>
                <div className="logoContent2">
                    <Image src="/Assets/Img/logo_2.svg" width={277} height={279} alt='Logo O&apos;ZOO' />
                    <Image src="/Assets/Img/logo_5.svg" width={277} height={438} alt='Mock-up' />
                    <Image src="/Assets/Img/logo_8.svg" width={277} height={279} alt='Mock-up' />
                </div>
                <div className="logoContent3">
                    <Image src="/Assets/Img/logo_3.svg" width={277} height={440} alt='Mock-up' />
                    <Image src="/Assets/Img/logo_6.svg" width={277} height={336} alt='Mock-up' />
                    <Image src="/Assets/Img/logo_9.svg" width={277} height={336} alt='Mock-up'/>
                </div>
            </div>
            <div className="imageContentResponsive">
                    <Image src="/Assets/Img/Logo_1_responsive.svg" width={240} height={114} alt='logo Noble Site' />
                    <Image src="/Assets/Img/logo_2_responsive.svg" width={240} height={114} alt='Mock-up'/>
                    <Image src="/Assets/Img/logo_3_responsive.svg" width={240} height={114} alt='Mock-up'/>
                    <Image src="/Assets/Img/logo_4_responsive.svg" width={240} height={114} alt='Mock-up' />
                    <Image src="/Assets/Img/logo_5_responsive.svg" width={240} height={114} alt='logo Noble Site' />
                    <Image src="/Assets/Img/logo_6_responsive.svg" width={240} height={114} alt='Mock-up'/>
                    <Image src="/Assets/Img/logo_7_responsive.svg" width={240} height={114} alt='Mock-up'/>
                    <Image src="/Assets/Img/logo_8_responsive.svg" width={240} height={114} alt='Mock-up' />
                    <Image src="/Assets/Img/logo_9_responsive.svg" width={240} height={114} alt='logo Noble Site' />
                    <Image src="/Assets/Img/logo_10_responsive.svg" width={240} height={114} alt='Mock-up'/>
            </div>
        </div>
    );
};

export default LogoImageContent;