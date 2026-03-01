'use client';

import { useState, useEffect } from 'react';
import Modal from '@/components/Modal';
import { Project, projects } from '@/data/projects';

function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'scroll';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <>
      <div className="absolute z-50 w-full mx-auto">
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} project={selectedProject} />
      </div>
      <div className="relative w-full min-h-[clamp(32rem,100vh,60rem)] bg-mediumBlue py-20 md:py-10">
        <p className="text-[clamp(3rem,9vw,10rem)] font-extrabold text-darkBlue text-center pb-5">
          our <span className="text-transparent [-webkit-text-stroke:3px_#1C2E4A]">projects</span>
        </p>

        <div className="flex items-center justify-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedProject(project);
                  setIsOpen(true);
                }}
                className="bg-yellow w-70 h-70 rounded-2xl flex items-center justify-center text-[clamp(0.9rem,2vw,1.8rem)] text-center font-bold text-darkBlue cursor-pointer hover:bg-darkBlue hover:border-3 hover:text-yellow"
              >
                {project.title1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
