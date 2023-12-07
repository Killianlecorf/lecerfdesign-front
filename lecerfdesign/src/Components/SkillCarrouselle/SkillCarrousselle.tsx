"use client"
import React, { useState } from 'react';
import './_SkillCarrousselle.scss';
import SkillCard from '../SkillCard/SkillCard';
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';

const SkillCarrousselle: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const items = [
    [
      {
        SkillImage: "/Assets/Img/skilllogo.jpg",
        SkillLogo: "/Assets/Img/logoLogo.svg",
        SkillDescription: 'Skill 1 Description',
      },
      {
        SkillImage: "/Assets/Img/skillwebdesign.jpg",
        SkillLogo: "/Assets/Img/logowebdesign.svg",
        SkillDescription: 'Skill 2 Description',
      },
    ],
    [
      {
        SkillImage: "/Assets/Img/skillwebdesign.jpg",
        SkillLogo: "/Assets/Img/logowebdesign.svg",
        SkillDescription: 'Skill 2 Description',
      },
      {
        SkillImage: "/Assets/Img/skillimprimes.jpg",
        SkillLogo: "/Assets/Img/logoImprimes.svg",
        SkillDescription: 'Skill 3 Description',
      },
    ],
    [
      {
        SkillImage: "/Assets/Img/skillimprimes.jpg",
        SkillLogo: "/Assets/Img/logoImprimes.svg",
        SkillDescription: 'Skill 3 Description',
      },
      {
        SkillImage: "/Assets/Img/skillvideo.jpg",
        SkillLogo: "/Assets/Img/logoVideo.svg",
        SkillDescription: 'Skill 4 Description',
      },
    ],
    [
      {
        SkillImage: "/Assets/Img/skillvideo.jpg",
        SkillLogo: "/Assets/Img/logoVideo.svg",
        SkillDescription: 'Skill 4 Description',
      },
      {
        SkillImage: "/Assets/Img/skilllogo.jpg",
        SkillLogo: "/Assets/Img/logoLogo.svg",
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
