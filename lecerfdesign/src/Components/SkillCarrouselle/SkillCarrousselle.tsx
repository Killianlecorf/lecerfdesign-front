"use client"
import React, { useState } from 'react';
import './_SkillCarrousselle.scss';
import SkillCard from '../SkillCard/SkillCard';
import skillImageLogo from "../../../public/Assets/Img/skillLogo.svg";
import logoLogo from "../../../public/Assets/Img/logoLogo.svg";
import skillImageWebDesign from "../../../public/Assets/Img/skillwebdesign.svg";
import logoWebDesign from "../../../public/Assets/Img/logowebdesign.svg";

const SkillCarrousselle: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const items = [
    {
      SkillImage: skillImageLogo,
      SkillLogo: logoLogo,
      SkillDescription: 'Skill 1 Description',
    },
    {
      SkillImage: skillImageWebDesign,
      SkillLogo: logoWebDesign,
      SkillDescription: 'Skill 2 Description',
    },
    ,
    {
      SkillImage: skillImageWebDesign,
      SkillLogo: logoWebDesign,
      SkillDescription: 'Skill 2 Description',
    },
    ,
    {
      SkillImage: skillImageWebDesign,
      SkillLogo: logoWebDesign,
      SkillDescription: 'Skill 2 Description',
    }
  ];

  const nextSlide = (): void => {
    setCurrentSlide((prevSlide) => (prevSlide === items.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = (): void => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? items.length - 1 : prevSlide - 1));
  };

  return (
    <div className="carousel">
      <div className="slider">
        {items.map((item, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <SkillCard
                SkillImage={item?.SkillImage || ''}
                SkillLogo={item?.SkillLogo || ''}
                SkillDescription={item?.SkillDescription || ''}
            />
            <SkillCard
                SkillImage={item?.SkillImage || ''}
                SkillLogo={item?.SkillLogo || ''}
                SkillDescription={item?.SkillDescription || ''}
            />
            <SkillCard
                SkillImage={item?.SkillImage || ''}
                SkillLogo={item?.SkillLogo || ''}
                SkillDescription={item?.SkillDescription || ''}
            />
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="prevButton">
        Previous
      </button>
      <button onClick={nextSlide} className="nextButton">
        Next
      </button>
      <div className="indicators">
        {items.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentSlide ? 'activeIndicator' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillCarrousselle;
