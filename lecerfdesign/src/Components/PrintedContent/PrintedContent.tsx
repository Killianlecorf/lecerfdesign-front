import React from 'react';
import './_printedContent.scss'
import Image from 'next/image';
import CardImage from '@/Components/CardImage/CardImage';

const PrintedContent = () => {
    return (
        <div className='printedContent'>
            <div className="PrintedImage">
                <div className="firstColumn">
                    <CardImage 
                        LinkImage='/Assets/Img/printed_1.jpg' 
                        WidthImage={277} 
                        HeightImage={336} 
                        Title='Kross-Officiel'
                        Content='Conception d&apos;un album et de vinyle pour l&apos;artiste Kross_Officiel'
                        AltText='' 
                    />
                    <CardImage 
                        LinkImage='/Assets/Img/printed_4.jpg' 
                        WidthImage={277} 
                        HeightImage={377} 
                        Title='Projet d&apos;étude'
                        Content='Conception d&apos;une affiche promotionnel pour un projet d&apos;étude'
                        AltText='' 
                    />
                </div>
                <div className="secondeColumn">
                    <CardImage 
                        LinkImage='/Assets/Img/printed_2.jpg' 
                        WidthImage={279} 
                        HeightImage={279} 
                        Title='Sushi Thai&apos;m'
                        Content='Conception d&apos;un menue de restauration pour Sushi Thai&apos;m'
                        AltText='' 
                    />
                    <CardImage 
                        LinkImage='/Assets/Img/printed_5.jpg' 
                        WidthImage={279} 
                        HeightImage={390} 
                        Title='FFGYM'
                        Content='Conception d&apos;une affiche promotionnel pour un championnat de Gym Interdepartemental PERFORMANCE'
                        AltText='' 
                    />
                </div>
                <div className="thirdColumn">
                    <CardImage 
                        LinkImage='/Assets/Img/printed_3.jpg' 
                        WidthImage={279} 
                        HeightImage={387} 
                        Title='LECERF Design'
                        Content='Conception d&apos;une affiche promotionnel pour LECERF Design'
                        AltText='' 
                    />
                    <CardImage 
                        LinkImage='/Assets/Img/printed_6.jpg' 
                        WidthImage={277} 
                        HeightImage={300} 
                        Title='FFGYM'
                        Content='Conception d&apos;une affiche promotionnel pour un championnat régional Artistique Féminine'
                        AltText='' 
                    />
                </div>
                <div className="printedResponsiveImage">
                    <Image src="/Assets/Img/printed_1_responsive.jpg" width={240} height={114} alt='' />
                    <h2>Kross-Officiel</h2>
                    <p>Conception d&apos;un album et de vinyle pour l&apos;artiste Kross_Officiel</p>
                    <Image src="/Assets/Img/printed_2_responsive.jpg" width={240} height={114} alt='' />
                    <h2>Sushi Thai&apos;m</h2>
                    <p>Conception d&apos;un menue de restauration pour Sushi Thai&apos;m</p>
                    <Image src="/Assets/Img/printed_3_responsive.jpg" width={240} height={114} alt='' />
                    <h2>LECERF Design</h2>
                    <p>Conception d&apos;une affiche promotionnel pour LECERF Design</p>
                    <Image src="/Assets/Img/printed_4_responsive.jpg" width={240} height={114} alt='' />
                    <h2>Projet d&apos;étude</h2>
                    <p>Conception d&apos;une affiche promotionnel pour un projet d&apos;étude</p>
                    <Image src="/Assets/Img/printed_5_responsive.jpg" width={240} height={114} alt='' />
                    <h2>FFGYM</h2>
                    <p>Conception d&apos;une affiche promotionnel pour un championnat de Gym Interdepartemental PERFORMANCE</p>
                    <Image src="/Assets/Img/printed_6_responsive.jpg" width={240} height={114} alt='' />
                    <h2>FFGYM</h2>
                    <p>Conception d&apos;une affiche promotionnel pour un championnat régional Artistique Féminine</p>
                </div>
            </div>
        </div>
    );
};

export default PrintedContent;