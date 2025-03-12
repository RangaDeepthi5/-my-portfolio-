
import React from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 md:px-10">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 lg:gap-16 items-center">
        <div className="md:col-span-7 z-10">
          <AnimatedSection animation="fade-down" delay={100}>
            <span className="inline-block mb-3 px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-sm font-medium">
              Welcome to my portfolio
            </span>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={300}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              I craft exceptional <span className="text-blue-500">digital</span> experiences
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={500}>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
              A passionate designer and developer focused on creating intuitive, engaging, and impactful digital solutions.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={700}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#projects" 
                className="glass-button px-6 py-3 font-medium inline-flex items-center justify-center"
              >
                View my work
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="#contact" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 ease-in-out inline-flex items-center justify-center"
              >
                Get in touch
              </a>
            </div>
          </AnimatedSection>
        </div>
        
        <div className="md:col-span-5 h-full flex justify-center z-0">
          <AnimatedSection 
            animation="fade-in" 
            delay={900}
            className="relative w-full max-w-md aspect-square"
          >
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-blue-400/30 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute top-1/3 right-1/4 w-1/3 h-1/3 bg-purple-400/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            <div className="w-full h-full glass-panel p-4 overflow-hidden flex items-center justify-center">
              <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-center text-gray-200 dark:text-gray-800">
                {/* Placeholder for hero image or avatar. You could replace this with an actual image */}
                {"{ }"}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
