import Image from 'next/image';
import React from 'react';
import './_LogoImageContent.scss';
import CardLogo from '@/Components/CardImage/CardImage';

const LogoImageContent = () => {
    return (
        <div className='LogoImageContent'>
            <div className="imageContent">
                <div className="logoContent1">
                    <CardLogo 
                        LinkImage='/Assets/Img/logo_12.svg' 
                        WidthImage={277} 
                        HeightImage={276} 
                        Title='BBFée&apos;Stival'
                        Content='Création de l&apos;identité visuelle BBFée&apos;Stival'
                        AltText='logo BBFée' 
                    />
                    <CardLogo 
                        LinkImage='/Assets/Img/logo_2.jpg' 
                        WidthImage={277} 
                        HeightImage={279} 
                        Title='Panda'
                        Content='Création de l&apos;identité visuelle de l&apos;entreprise O&apos;Zoo'
                        AltText='logo O&apos;Zoo' 
                    />
                    <CardLogo 
                        LinkImage='/Assets/Img/logo_5.jpg' 
                        WidthImage={277} 
                        HeightImage={438} 
                        Title='LECERF DESIGN'
                        Content='Création de l&apos;identité visuelle de l&apos;entreprise LECERF Design'
                        AltText='logo SEIF DEIT' 
                    />
                    <CardLogo 
                        LinkImage='/Assets/Img/logo_8.jpg' 
                        WidthImage={277} 
                        HeightImage={279} 
                        Title='Kross_Officiel'
                        Content='Création de l&apos;identité visuelle de l&apos;entreprise Kross_Officiel'
                        AltText='logo Kross_Officiel' 
                    />
                </div>
                <div className="logoContent2">
                    <CardLogo 
                        LinkImage='/Assets/Img/logo_11.svg' 
                        WidthImage={277} 
                        HeightImage={335} 
                        Title='Loupkas'
                        Content='Création de l&apos;identité visuelle Loupkas'
                        AltText='logo Loupkas' 
                    />
                    <CardLogo 
                        LinkImage='/Assets/Img/logo_3.jpg' 
                        WidthImage={277} 
                        HeightImage={440} 
                        Title='MUSCLE SHEEP'
                        Content='Création de l&apos;identité visuelle Musle Sheep'
                        AltText='logo MUSCLE SHEEP' 
                    />
                    <CardLogo 
                        LinkImage='/Assets/Img/logo_6.jpg' 
                        WidthImage={277} 
                        HeightImage={336} 
                        Title='Sky Limit'
                        Content='Création de l&apos;identité visuelle Sky Limit'
                        AltText='logo Sky Limit' 
                    />
                    <CardLogo 
                        LinkImage='/Assets/Img/logo_9.jpg' 
                        WidthImage={278} 
                        HeightImage={336} 
                        Title='HANKALA'
                        Content='Création de l&apos;identité visuelle Hankala'
                        AltText='logo HANKALA' 
                    />
                </div>
                <div className="logoContent3">
                    <CardLogo 
                        LinkImage='/Assets/Img/logo_1.jpg' 
                        WidthImage={277} 
                        HeightImage={307} 
                        Title='Noble Site'
                        Content='Création de l&apos;identité visuelle de l&apos;entreprise Noble Site'
                        AltText='logo Noble Site' 
                    />
                    <CardLogo 
                        LinkImage='/Assets/Img/logo_4.jpg' 
                        WidthImage={278} 
                        HeightImage={336} 
                        Title='SEIF DEIT'
                        Content='Création de l&apos;identité visuelle de l&apos;entreprise SEIF DEIT'
                        AltText='logo SEIF DEIT' 
                    />
                    <CardLogo 
                        LinkImage='/Assets/Img/logo_7.jpg' 
                        WidthImage={277} 
                        HeightImage={336} 
                        Title='100% CAFÉ'
                        Content='Création de l&apos;identité visuelle 100% Café'
                        AltText='logo 100% CAFÉ' 
                    />
                    <CardLogo 
                        LinkImage='/Assets/Img/logo_10.jpg' 
                        WidthImage={277} 
                        HeightImage={336} 
                        Title='TutoDuel Académie'
                        Content='Création de l&apos;identité visuelle TutoDuel Académie'
                        AltText='logo TutoDuel Académie' 
                    />
                </div>
            </div>
            <div className="imageContentResponsive">
                <Image src="/Assets/Img/logo_1_responsive.jpg" width={240} height={114} alt='logo Noble Site' />
                <h2>Noble site</h2>
                <p>Création de l&apos;identité visuelle de l&apos;entreprise Noble Site</p>
                <Image src="/Assets/Img/logo_2_responsive.jpg" width={240} height={114} alt='Mock-up'/>
                <h2>O&apos;Zoo</h2>
                <p>Création de l&apos;identité visuelle de l&apos;entreprise O&apos;Zoo</p>
                <Image src="/Assets/Img/logo_3_responsive.jpg" width={240} height={114} alt='Mock-up'/>
                <h2>MUSCLE SHEEP</h2>
                <p>Création de l&apos;identité visuelle Musle Sheep </p>
                <Image src="/Assets/Img/logo_4_responsive.jpg" width={240} height={114} alt='Mock-up' />
                <h2>SEIF DEIT</h2>
                <p>Création de l&apos;identité visuelle de l&apos;entreprise SEIF DEIT</p>
                <Image src="/Assets/Img/logo_5_responsive.jpg" width={240} height={114} alt='logo Noble Site' />
                <h2>LECERF DESIGN</h2>
                <p>Création de l&apos;identité visuelle de l&apos;entreprise LECERF Design</p>
                <Image src="/Assets/Img/logo_6_responsive.jpg" width={240} height={114} alt='Mock-up'/>
                <h2>Sky Limit</h2>
                <p>Création de l&apos;identité visuelle de l&apos;entreprise Sky Limit</p>
                <Image src="/Assets/Img/logo_7_responsive.jpg" width={240} height={114} alt='Mock-up'/>
                <h2>100% CAFÉ</h2>
                <p>Création de l&apos;identité visuelle de l&apos;entreprise 100% Café</p>
                <Image src="/Assets/Img/logo_8_responsive.jpg" width={240} height={114} alt='Mock-up' />
                <h2>Kross_Officiel</h2>
                <p>Création de l&apos;identité visuelle de l&apos;entreprise Kross_Officiel</p>
                <Image src="/Assets/Img/logo_9_responsive.jpg" width={240} height={114} alt='logo Noble Site' />
                <h2>HANKALA</h2>
                <p>Création de l&apos;identité visuelle de l&apos;entreprise Hankala</p>
                <Image src="/Assets/Img/logo_10_responsive.jpg" width={240} height={114} alt='Mock-up'/>
                <h2>TutoDuel Académie</h2>
                <p>Création de l&apos;identité visuelle de l&apos;entreprise TutoDuel Académie</p>
            </div>
        </div>
    );
};

export default LogoImageContent;