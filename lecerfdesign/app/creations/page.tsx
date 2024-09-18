import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import CreationPageVideo from "@/Components/CreationPageVideo/CreationPageVideo";
import CreationBismoulien from '@/Components/CreationBismoulien/CreationBismoulien';
import CardImage from '@/Components/CardImage/CardImage';
import Head from 'next/head';

const Creations = () => {
    return (
        <div>
        <Head>
            <title>Lecerf design | Créations</title>
            <meta name="description" content="Donnez vie à votre vision, avec des solutions graphiques sur mesure !" />
            <meta name="keywords" content="Design, Rouen, lecerf" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="robots" content="index, follow" />
        </Head>
            <Header currentPath="/creations"/>
            <CreationPageVideo />
            <div className="banniereCreation">
            </div>
            <CreationBismoulien />
            <div className="otherCreation">
                <div className="titleOtherCreation">
                    <h2>Découvrez d&apos;autres créations uniques et variées, réalisées avec différentes techniques artistiques.</h2>
                </div>
                <div className="iconsOtherCreation">
                    <CardImage 
                        LinkImage='/Assets/Img/tasse.svg' 
                        WidthImage={280} 
                        HeightImage={430} 
                        Title='Illustrations' 
                        Content='Illustrations personnalisées pour des cadeaux ou autres occasions, adaptées aux particuliers' 
                        AltText='Illustrations'
                    />
                    <CardImage 
                        LinkImage='/Assets/Img/rugby.svg' 
                        WidthImage={280} 
                        HeightImage={430} 
                        Title='Partenariat' 
                        Content='Partenariat avec Studio63Rouen et normandie-photo.com' 
                        AltText='Partenariat'
                    />
                    <CardImage 
                        LinkImage='/Assets/Img/krossvinyle.svg' 
                        WidthImage={280} 
                        HeightImage={430} 
                        Title='Illustrations' 
                        Content='Illustrations personnalisées adaptées aux particuliers' 
                        AltText='Illustrations'
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Creations;