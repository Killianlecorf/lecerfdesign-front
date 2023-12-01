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
    {
      SkillImage: skillImageWebDesign,
      SkillLogo: logoWebDesign,
      SkillDescription: 'Skill 3 Description',
    },
    {
      SkillImage: skillImageWebDesign,
      SkillLogo: logoWebDesign,
      SkillDescription: 'Skill 4 Description',
    }
  ];

  const slidesToShow = 2;

  const totalSlides = Math.ceil(items.length / slidesToShow);

  const nextSlide = (): void => {
    setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
  };
  
  const prevSlide = (): void => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
  };

  const startIndex = currentSlide * slidesToShow;
  const endIndex = startIndex + slidesToShow;

  return (
    <div className="carousel">
      <div className="slider">
        {items.slice(startIndex, endIndex).map((item, i) => (
          <SkillCard
            key={i}
            SkillImage={item?.SkillImage || ''}
            SkillLogo={item?.SkillLogo || ''}
            SkillDescription={item?.SkillDescription || ''}
          />
        ))}
      </div>
      <button onClick={prevSlide} className="prevButton">
        Previous
      </button>
      <button onClick={nextSlide} className="nextButton">
        Next
      </button>
      <div className="indicators">
        {[...Array(totalSlides)].map((_, index) => (
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
