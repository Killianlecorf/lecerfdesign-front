import DescriptionLogo from "@/Components/DescriptionLogo/DescriptionLogo"
import Header from "@/Components/Header/Header"
import Button from "@/Components/UI-kit/Button/Button"
import SpeIcon from "@/Components/UI-kit/SpeIcon/SpeIcon"
import graphisme from "../public/Assets/Img/graphisme_vert.svg";
import Video from "../public/Assets/Img/montage_video_vert.svg";
import Photo from "../public/Assets/Img/photo_video_vert.svg";
import Design from "../public/Assets/Img/design_web_vert.svg";
import SkillCarrousselle from "@/Components/SkillCarrouselle/SkillCarrousselle";
import Footer from "@/Components/Footer/Footer";
import Link from "next/link";
import Head from "next/head";

export default function Page() {
  return (
    <main className="Home">
        <Head>
            <title>Lecerf design | Accueil</title>
            <meta name="description" content="Donnez vie à votre vision, avec des solutions graphiques sur mesure !" />
            <meta name="keywords" content="Design, Rouen, lecerf" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="robots" content="index, follow" />
        </Head>
        <Header/>
        <div className="backgroundImage">
            <div className="titleContentHome">
                <div className="titleHome">
                    <h1>Bienvenue chez <span style={{color: 'var(--Main-color)'}}>Lecerf Design</span></h1>
                </div>
                <div className="descriptionContentHome">
                    <h2>PRINT, DESIGN, COMMUNICATION</h2>
                </div>
            </div>
            <div className="ButtonContentHome">
                <Link href="/contact">
                    <Button ButtonClassName="BigButtonArrow" ButtonStyle={{fontSize: "16px", color: "var(--White-color)"}} ButtonContent="Contactez-nous" />
                </Link>
            </div>
        </div>
        <DescriptionLogo />
        <div className="SpeIconContent">
            <div className="SpeIconSize">
                <div className="FirstIcon">
                    <SpeIcon SrcImg={graphisme} SpeContent="GRAPHISME"/>
                    <SpeIcon SrcImg={Video} SpeContent="MONTAGE VIDÉO"/>
                </div>
                <div className="SecondIcon">
                    <SpeIcon SrcImg={Photo} SpeContent="PHOTO & VIDÉO"/>
                    <SpeIcon SrcImg={Design} SpeContent="DESIGN WEB"/>
                </div>
            </div>
        </div>
        <SkillCarrousselle />
        {/* <BismoulienHomeContent /> */}
        <Footer />
    </main>
  )
}
