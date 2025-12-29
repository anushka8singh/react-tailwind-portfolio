function ProjectCard({title,description,tech,link}){
    return(
        <div className="bg-white border border-gray-100 rounded-2xl p-6
                hover:shadow-xl hover:-translate-y-1
                transition-all duration-300">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <p className="text-sm text-gray-500 mt-4">{tech}</p>
        <a href={link}
           target="_blank"
           className="inline-block mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-800">
            View on Github           </a>
        </div>
        );
}

export default ProjectCard;