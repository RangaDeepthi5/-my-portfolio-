
import React from 'react';
import { Code, BookOpen, Layers, Database } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const skills = [
  "Java",
  "MySQL",
  "DBMS",
  "Linux",
  "Python"
];

const services = [
  {
    title: "Web Development",
    description: "Creating responsive and user-friendly websites using modern frameworks and tools.",
    icon: Code,
  },
  {
    title: "Database Management",
    description: "Designing and implementing efficient database solutions with MySQL and other DBMS systems.",
    icon: Database,
  },
  {
    title: "Backend Development",
    description: "Building robust server-side applications with Java and Python technologies.",
    icon: Layers,
  },
  {
    title: "Continuous Learning",
    description: "Staying updated with latest technologies and implementing best practices in all projects.",
    icon: BookOpen,
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
            A passionate developer with a keen eye for detail and a dedication to delivering exceptional digital experiences.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
          <AnimatedSection className="md:col-span-5" animation="slide-in-right">
            <div className="glass-panel p-8">
              <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-5">
                I'm Nibbragandla Ranga Deepthi, a dedicated developer with a strong foundation in Java, Python, and database management. As a fresher, I'm enthusiastic about applying my technical skills to create efficient and innovative solutions for real-world problems.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="md:col-span-7" animation="slide-in-left" delay={200}>
            <div className="glass-panel p-8">
              <h3 className="text-xl font-semibold mb-6">My Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-blue-500/10 text-blue-500 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
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
