import Image from 'next/image';
import React from 'react';
import './_LogoImageContent.scss';

const LogoImageContent = () => {
    return (
        <div className='LogoImageContent'>
            <div className="imageContent">
                <div className="logoContent1">
                    <Image src="/assets/img/logo_1.svg" alt='logo Noble Site' width={277} height={307} />
                    <Image src="/assets/img/logo_4.svg" alt='Logo O&apos;ZOO' width={277} height={336}  />
                    <Image src="/assets/img/logo_7.svg" alt='Logo O&apos;ZOO' width={277} height={336}  />
                    <Image src="/assets/img/logo_10.svg" alt='Logo O&apos;ZOO' width={277} height={336}  />
                </div>
                <div className="logoContent2">
                    <Image src="/assets/img/logo_2.svg" alt='logo Noble Site' width={277} height={279} />
                    <Image src="/assets/img/logo_5.svg" alt='Logo O&apos;ZOO' width={277} height={438}  />
                    <Image src="/assets/img/logo_8.svg" alt='Logo O&apos;ZOO' width={277} height={279}  />
                </div>
                <div className="logoContent3">
                    <Image src="/assets/img/logo_3.svg" alt='logo Noble Site' width={277} height={440} />
                    <Image src="/assets/img/logo_6.svg" alt='Logo O&apos;ZOO' width={277} height={336}  />
                    <Image src="/assets/img/logo_9.svg" alt='Logo O&apos;ZOO' width={277} height={336}  />
                </div>
            </div>
        </div>
    );
};

export default LogoImageContent;