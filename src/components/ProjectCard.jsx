function ProjectCard({title,description,tech,link}){
    return(
        <div className="border rounded-xl p-6 hover:shadow-lg transition">

        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <p className="text-sm text-gray-500 mt-4">{tech}</p>
        <a href={link}
           target="_blank"
           className="inline-block mt-4 text-sm text-blue-600 hover:underline">
            View on Github           </a>
        </div>
        );
}

export default ProjectCard;