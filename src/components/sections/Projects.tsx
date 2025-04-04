import React, { useState } from 'react';
import { ExternalLinkIcon, PlayIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const projects = [
    {
      title: "WhiteOaks Harvest",
      description: "A web application for vendor management and procurement. Developed the frontend using React and TypeScript, implementing responsive UI components and state management with Redux.",
      image: "/images/project-woaharvest.svg",
      technologies: ["React", "TypeScript", "Redux", "Responsive Design"],
      liveLink: "https://preprod.woaharvest.com/",
      videoLink: "/videos/woaharvest.mp4",
      role: "Frontend Developer"
    },
    {
      title: "Wick Mobile App",
      description: "An investment social media and educational platform. Worked as a QA Engineer, implementing automated testing with Maestro for iOS and Android versions, ensuring cross-platform compatibility.",
      image: "/images/project-wick.svg",
      technologies: ["Maestro", "Mobile Testing", "API Testing", "Cross-platform"],
      liveLink: "https://usewick.com/",
      videoLink: "/videos/wick.mp4",
      role: "QA Engineer"
    },
    {
      title: "Food Delivery App",
      description: "A food delivery platform allowing users to browse restaurants, view menus, and place orders. Built with React and modern CSS, featuring responsive design and intuitive user interface.",
      image: "/images/project-food.svg",
      technologies: ["React", "CSS", "Responsive Design", "UI/UX"],
      liveLink: "https://food-five-brown.vercel.app/",
      videoLink: "/videos/food.mp4",
      role: "Frontend Developer"
    }
  ];

  const openVideo = (videoUrl: string) => {
    setActiveVideo(videoUrl);
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  return (
    <section id="projects" className="py-16 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2 text-center">
          My Projects
        </h2>
        <p className="text-zinc-700 dark:text-zinc-300 text-center mb-12 max-w-2xl mx-auto">
          Showcasing my expertise in frontend development and quality assurance through real-world applications
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg overflow-hidden border border-zinc-200 dark:border-zinc-700 transition-all hover-lift hover:border-blue-300 dark:hover:border-blue-700 flex flex-col h-full"
            >
              <div className="h-52 bg-zinc-100 dark:bg-zinc-700 relative overflow-hidden group">
                {project.image ? (
                  <>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {project.videoLink && (
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="bg-white/20 backdrop-blur-sm border-white/50 text-white hover:bg-white/30"
                          onClick={() => openVideo(project.videoLink!)}
                        >
                          <PlayIcon className="h-8 w-8" />
                        </Button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900">
                    <span className="text-xl font-bold text-zinc-400 dark:text-zinc-600">{project.title}</span>
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-md">
                  {project.role}
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white">{project.title}</h3>
                <p className="text-zinc-700 dark:text-zinc-300 mb-5 flex-grow">{project.description}</p>
                
                <div className="mb-5">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 mt-auto">
                  {project.liveLink && (
                    <Button variant="default" size="sm" className="flex-1" asChild>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLinkIcon className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.videoLink && (
                    <Button variant="outline" size="sm" className="flex-1" onClick={() => openVideo(project.videoLink!)}>
                      <PlayIcon className="h-4 w-4 mr-2" />
                      Watch Demo
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden">
            <Button 
              variant="outline" 
              size="icon" 
              className="absolute top-2 right-2 z-10 bg-black/50 border-white/20 text-white hover:bg-black/70"
              onClick={closeVideo}
            >
              <XIcon className="h-5 w-5" />
            </Button>
            <video 
              src={activeVideo} 
              controls 
              autoPlay 
              className="w-full max-h-[80vh]"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
