"use client"
import React, { useState } from 'react';
import './_SkillCarrousselle.scss';
import SkillCard from '../SkillCard/SkillCard';
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';

const SkillCarrousselle: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const items = [
    [
      {
        SkillImage: "/Assets/Img/skilllogo.jpg",
        SkillLogo: "/Assets/Img/logoLogo.svg",
        SkillDescription: 'Découvrez notre galerie de logos, chaque création porte en elle une histoire !',
        skillPath: "/logo"
      },
      {
        SkillImage: "/Assets/Img/skillwebdesign.jpg",
        SkillLogo: "/Assets/Img/logowebdesign.svg",
        SkillDescription: "Explorez nos créations de webdesign, porteuses de visions, l'inspiration visuelle pour votre présence en ligne idéale !",
        skillPath: "/webdesign"
      },
    ],
    [
      {
        SkillImage: "/Assets/Img/skillwebdesign.jpg",
        SkillLogo: "/Assets/Img/logowebdesign.svg",
        SkillDescription: "Explorez nos créations de webdesign, porteuses de visions, l'inspiration visuelle pour votre présence en ligne idéale !",
      },
      {
        SkillImage: "/Assets/Img/skillimprimes.jpg",
        SkillLogo: "/Assets/Img/logoImprimes.svg",
        SkillDescription: 'Explorez nos sites internet uniques, conçus avec avec un dévouement. Chacun incarne notre passion pour le design en ligne !',
        skillPath: "/printed"
      },
    ],
    [
      {
        SkillImage: "/Assets/Img/skillimprimes.jpg",
        SkillLogo: "/Assets/Img/logoImprimes.svg",
        SkillDescription: 'Explorez nos sites internet uniques, conçus avec avec un dévouement. Chacun incarne notre passion pour le design en ligne !',
        skillPath: "/printed"
      },
      {
        SkillImage: "/Assets/Img/skillvideo.jpg",
        SkillLogo: "/Assets/Img/logoVideo.svg",
        SkillDescription: "Décourvrez nos vidéos, façonnées avec passion et savoir-faire. Incarnant notre art de l’image !",
        skillPath: "/creations"
      },
    ],
    [
      {
        SkillImage: "/Assets/Img/skillvideo.jpg",
        SkillLogo: "/Assets/Img/logoVideo.svg",
        SkillDescription: "Décourvrez nos vidéos, façonnées avec passion et savoir-faire. Incarnant notre art de l’image !",
        skillPath: "/creations"
      },
      {
        SkillImage: "/Assets/Img/skilllogo.jpg",
        SkillLogo: "/Assets/Img/logoLogo.svg",
        SkillDescription: 'Découvrez notre galerie de logos, chaque création porte en elle une histoire !',
        skillPath: "/logo"
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

  const handleTouchStart = (e: React.TouchEvent): void => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent): void => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (): void => {
    if (!touchStart || !touchEnd) return;

    const swipeDistance = touchStart - touchEnd;

    if (swipeDistance > 50) {
      nextSlide();
    } else if (swipeDistance < -50) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div
      className="carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
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
              skillPath={itemPair.skillPath || ""}
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
