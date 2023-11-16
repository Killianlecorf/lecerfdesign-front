import DescriptionLogo from "@/Components/DescriptionLogo/DescriptionLogo"
import Header from "@/Components/Header/Header"
import Button from "@/Components/UI-kit/Button/Button"
import SpeIcon from "@/Components/UI-kit/SpeIcon/SpeIcon"
import graphisme from "../public/Assets/Img/graphisme_vert.svg";
import Video from "../public/Assets/Img/montage_video_vert.svg";
import Photo from "../public/Assets/Img/photo_video_vert.svg";
import Design from "../public/Assets/Img/design_web_vert.svg";
import SkillCarrousselle from "@/Components/SkillCarrouselle/SkillCarrousselle";

export default function Page() {
  return (
    <main className="Home">
        <Header />
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
                <Button ButtonClassName="Button" ButtonStyle={{fontSize: "16px", color: "var(--White-color)"}} ButtonContent="Contacter-nous" />
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
    </main>
  )
}
