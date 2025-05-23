// File: src/components/sections/Projects.tsx

import { projects } from '../../data/projects';
import ExpandableList from '../ExpandableList';
import ProjectCard from '../ProjectCard';

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-4 bg-gray-900">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
                    Featured Projects
                </h2>

                <ExpandableList
                    items={projects}
                    initialCount={3}
                    renderItem={(project) => (
                        <ProjectCard
                            id={project.id}
                            title={project.title}
                            description={project.description}
                            liveLink={project.liveLink}
                            downloadLink={project.downloadLink}
                            technologies={project.technologies}
                            type={project.type}
                        />

                    )}
                />
            </div>
        </section>
    );
};

export default Projects;
