
import React from 'react';
import { Code, Palette, Lightbulb, Code2 } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const skills = [
  { name: "HTML & CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "UI/UX Design", level: 85 },
];

const services = [
  {
    title: "UI/UX Design",
    description: "Creating intuitive and engaging user experiences with a focus on usability and aesthetics.",
    icon: Palette,
  },
  {
    title: "Frontend Development",
    description: "Building responsive, fast and interactive user interfaces using modern frameworks and tools.",
    icon: Code,
  },
  {
    title: "Creative Solutions",
    description: "Developing innovative approaches to solve complex problems with elegant solutions.",
    icon: Lightbulb,
  },
  {
    title: "Full Stack Development",
    description: "End-to-end application development with both frontend and backend expertise.",
    icon: Code2,
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-10 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block mb-2 px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-sm font-medium">
            About me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Experience & Skills
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            A passionate designer and developer with a keen eye for detail and a dedication to delivering exceptional digital experiences.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
          <AnimatedSection className="md:col-span-5" animation="fade-right">
            <div className="glass-panel p-8">
              <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-5">
                I'm a passionate digital creator with expertise in both design and development. With a background in computer science and a love for aesthetics, I bridge the gap between functionality and visual appeal.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-5">
                My approach combines technical excellence with creative problem-solving, ensuring that every project I work on is not only visually stunning but also technically sound and user-focused.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                I believe in continuous learning and staying on top of industry trends and technologies to deliver cutting-edge solutions that exceed expectations.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="md:col-span-7" animation="fade-left" delay={200}>
            <div className="glass-panel p-8">
              <h3 className="text-xl font-semibold mb-6">My Skills</h3>
              <div className="space-y-5">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`, 
                          transitionDelay: `${index * 100 + 400}ms` 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="mt-16">
          <AnimatedSection className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold">
              Services I Offer
            </h3>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <AnimatedSection 
                key={service.title} 
                delay={index * 100 + 200}
                className="glass-panel p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="bg-blue-500/10 p-3 rounded-lg w-fit mb-4">
                  <service.icon className="h-6 w-6 text-blue-500" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {service.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
