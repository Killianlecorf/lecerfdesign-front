import Image from 'next/image';
import React from 'react';
import './_LogoImageContent.scss';

const LogoImageContent = () => {
    return (
        <div className='LogoImageContent'>
            <div className="imageContent">
                <Image src="/assets/img/logo_1.svg" alt='logo Noble Site' width={275} height={307} />
                <Image src="/assets/img/logo_4.svg" alt='Logo O&apos;ZOO' width={277} height={336}  />
                <Image src="/assets/img/logo_2.svg" alt='Logo O&apos;ZOO' width={279} height={279}  />
                <Image src="/assets/img/logo_5.svg" alt='Logo O&apos;ZOO' width={277} height={438}  />
                <Image src="/assets/img/logo_3.svg" alt='Logo O&apos;ZOO' width={277} height={440}  />
                <Image src="/assets/img/logo_6.svg" alt='Logo O&apos;ZOO' width={277} height={440}  />
            </div>
        </div>
    );
};

export default LogoImageContent;