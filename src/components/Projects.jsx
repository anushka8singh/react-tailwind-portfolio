import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio built using React and Tailwind CSS",
      tech: "React, Tailwind CSS",
      link: "https://github.com/anushka8singh",
    },
    {
      title: "JavaScript Mini Apps",
      description: "Small apps built to practice core JavaScript concepts",
      tech: "JavaScript",
      link: "https://github.com/anushka8singh",
    },
  ];

  return (
    <section id="projects" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center">
          Projects
        </h2>

        <p className="text-gray-600 text-center mt-2">
          Some projects I built while learning web development
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
