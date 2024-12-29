import React from 'react';
import { HERO_CONTENT } from '../constants/index';
import pp1 from '../assets/1.jpg';
import pp2 from '../assets/2.jpg';
import pp3 from '../assets/3.jpg';

const images = [pp1, pp2, pp3]; // Add more image paths here
let currentIndex = 0;

const Hero = () => {
  const [currentImage, setCurrentImage] = React.useState(images[0]);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      setCurrentImage(images[currentIndex]);
    }, 3000); // Switch images every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-4">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16">
              Muhammad Mustafa
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-transparent bg-clip-text text-4xl">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img src={currentImage} alt="Profile image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
