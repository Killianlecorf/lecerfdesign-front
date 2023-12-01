"use client"
import React, { useState } from 'react';
import './_SkillCarrousselle.scss';
import SkillCard from '../SkillCard/SkillCard';
import skillImageLogo from '../../../public/Assets/Img/skillLogo.svg';
import logoLogo from '../../../public/Assets/Img/logoLogo.svg';
import skillImageWebDesign from '../../../public/Assets/Img/skillwebdesign.svg';
import logoWebDesign from '../../../public/Assets/Img/logowebdesign.svg';
import logoImprimes from '../../../public/Assets/Img/logoImprimes.svg';
import skillImprimes from '../../../public/Assets/Img/skillImprimes.svg';
import skillVideo from '../../../public/Assets/Img/skillVideo.svg';
import logoVideo from '../../../public/Assets/Img/logoVideo.svg';
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';

const SkillCarrousselle: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const items = [
    [
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
    ],
    [
      {
        SkillImage: skillImageWebDesign,
        SkillLogo: logoWebDesign,
        SkillDescription: 'Skill 2 Description',
      },
      {
        SkillImage: skillImprimes,
        SkillLogo: logoImprimes,
        SkillDescription: 'Skill 3 Description',
      },
    ],
    [
      {
        SkillImage: skillImprimes,
        SkillLogo: logoImprimes,
        SkillDescription: 'Skill 3 Description',
      },
      {
        SkillImage: skillVideo,
        SkillLogo: logoVideo,
        SkillDescription: 'Skill 4 Description',
      },
    ],
    [
      {
        SkillImage: skillVideo,
        SkillLogo: logoVideo,
        SkillDescription: 'Skill 4 Description',
      },
      {
        SkillImage: skillImageLogo,
        SkillLogo: logoLogo,
        SkillDescription: 'Skill 1 Description',
      },
    ],
  ];

  const totalSlides = items.length;

  const nextSlide = (): void => {
    setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = (): void => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
  };

  const startIndex = currentSlide % totalSlides;

  return (
    <div className="carousel">
      <div className="slider">
        <button onClick={prevSlide} className="prevButton">
          <SlArrowLeft />
        </button>
        {items[startIndex].map((itemPair, i) => (
          <div className="skillPair" key={i}>
            <SkillCard
              SkillImage={itemPair.SkillImage}
              SkillLogo={itemPair.SkillLogo}
              SkillDescription={itemPair.SkillDescription}
            />
          </div>
        ))}
        <button onClick={nextSlide} className="nextButton">
          <SlArrowRight />
        </button>
      </div>
      <div className="indicators">
        {[...Array(totalSlides)].map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === startIndex ? 'activeIndicator' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillCarrousselle;
