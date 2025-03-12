import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

// Updated project data with your projects
const projects = [
  {
    id: 1,
    title: 'Hostel Management System',
    description: 'A comprehensive system for managing hostel operations including room allocation, student records, and fee management.',
    tags: ['Java', 'MySQL', 'DBMS'],
    image: 'https://placehold.co/600x400/e9ecef/6c757d?text=Hostel+Management+System',
    liveLink: '#',
    githubLink: '#',
  },
  {
    id: 2,
    title: 'Blood Bank Management System',
    description: 'An efficient system for tracking blood inventory, donor information, and blood request management for hospitals and blood banks.',
    tags: ['Java', 'MySQL', 'DBMS'],
    image: 'https://placehold.co/600x400/e9ecef/6c757d?text=Blood+Bank+System',
    liveLink: '#',
    githubLink: '#',
  },
  {
    id: 3,
    title: 'Light Weight Meta Learning Botnet Attack System',
    description: 'An innovative system utilizing meta-learning techniques to detect and prevent botnet attacks with minimal computational resources.',
    tags: ['Python', 'Linux', 'Machine Learning'],
    image: 'https://placehold.co/600x400/e9ecef/6c757d?text=Botnet+Detection+System',
    liveLink: '#',
    githubLink: '#',
  },
];

// Filter categories based on your skills
const categories = ['All', 'Java', 'MySQL', 'DBMS', 'Python', 'Linux', 'Machine Learning'];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => 
        project.tags.some(tag => tag.toLowerCase() === activeCategory.toLowerCase())
      );

  return (
    <section id="projects" className="py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block mb-2 px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-sm font-medium">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Recent Projects
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Explore a selection of my latest projects showcasing my skills and expertise in creating beautiful, functional digital experiences.
          </p>
        </AnimatedSection>

        <AnimatedSection className="flex justify-center mb-10 overflow-x-auto pb-2" animation="fade-up">
          <div className="flex space-x-3">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-secondary hover:bg-secondary/80 text-gray-700 dark:text-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              delay={index * 100 + 100}
              animation="fade-up"
              className="group"
            >
              <div 
                className="glass-panel overflow-hidden"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-video object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-6 transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="flex space-x-3">
                      <a href={project.liveLink} className="glass-button p-2" aria-label="View live project">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                      <a href={project.githubLink} className="glass-button p-2" aria-label="View GitHub repository">
                        <Github className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
