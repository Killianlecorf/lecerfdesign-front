import React from 'react';
import './_webdesignContent.scss'
import Image from 'next/image';
import CardLogo from '@/Components/CardImage/CardImage';

const WebdesignContent = () => {
    return (
        <div className='webdesignContent'>
              <div className="webdesignImage">
                    <div className="firstWebdesign">
                        <div className="resizeImage">
                            <CardLogo 
                                LinkImage='/Assets/Img/webdesign_1.jpg' 
                                WidthImage={277} 
                                HeightImage={234} 
                                Title='Diva Pasta'
                                Content='Conception d&apos;un site web pour le restaurant Diva Pasta (projet d&apos;étude)'
                                AltText='' 
                            />
                        </div>
                        <div className="resizeImage">
                            <CardLogo 
                                LinkImage='/Assets/Img/webdesign_2.jpg' 
                                WidthImage={277} 
                                HeightImage={287} 
                                Title='HERMES MARKETING'
                                Content='Conception d&apos;un site web tutoriel sur le marketing pour Hermès Marketing'
                                AltText='' 
                            />
                        </div>
                        <div className="resizeImage">
                            <CardLogo 
                                LinkImage='/Assets/Img/webdesign_3.jpg' 
                                WidthImage={277} 
                                HeightImage={234} 
                                Title='ELEC PRO RENOV'
                                Content='Conception d&apos;un site web pour l&apos;entreprise Elec Pro Rénov'
                                AltText='' 
                            />
                        </div>
                    </div> 
                    <div className="secondWebdesign">
                        <div className="resizeImage">
                            <CardLogo 
                                LinkImage='/Assets/Img/webdesign_4.jpg' 
                                WidthImage={575} 
                                HeightImage={369} 
                                Title='IMAGINE DRAGONS'
                                Content='Refonte du site Imagine Dragons (Projet d&apos;étude)'
                                AltText='' 
                            />
                        </div>
                        <div className="resizeImage">
                            <CardLogo 
                                LinkImage='/Assets/Img/webdesign_5.jpg' 
                                WidthImage={277} 
                                HeightImage={369} 
                                Title='DEER FOOT'
                                Content='Conception d&apos;un site Ecommerce de chausette pour Deer Foot (Projet d&apos;étude)'
                                AltText='' 
                            />
                        </div>
                    </div> 
                    <div className="webdesignResponsive">
                        <Image src="/Assets/Img/webdesign_1_responsive.jpg" width={240} height={114} alt='' />
                        <h2>Diva Pasta</h2>
                        <p>Conception d&apos;un site web pour le restaurant Diva Pasta (projet d&apos;étude)</p>
                        <Image src="/Assets/Img/webdesign_2_responsive.jpg" width={240} height={114} alt='' />
                        <h2>HERMES MARKETING</h2>
                        <p>Conception d&apos;un site web tutoriel sur le marketing pour Hermès Marketing</p>
                        <Image src="/Assets/Img/webdesign_3_responsive.jpg" width={240} height={114} alt='' />
                        <h2>ELEC PRO RENOV</h2>
                        <p>Conception d&apos;un site web pour l&apos;entreprise Elec Pro Rénov</p>
                        <Image src="/Assets/Img/webdesign_4_responsive.jpg" width={240} height={114} alt='' />
                        <h2>IMAGINE DRAGONS</h2>
                        <p>Refonte du site Imagine Dragons (Projet d&apos;étude)</p>
                        <Image src="/Assets/Img/webdesign_5_responsive.jpg" width={240} height={114} alt='' />
                        <h2>DEER FOOT</h2>
                        <p>Conception d&apos;un site Ecommerce de chausette pour Deer Foot (Projet d&apos;étude)</p>
                    </div>
              </div>
        </div>
    );
};

export default WebdesignContent;