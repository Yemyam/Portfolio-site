const Projects = () => {

    const projects = [
        {
            title: "Work in Progress",
            image: "https://cdn-icons-png.flaticon.com/512/10931/10931447.png",
            description: "A work in progress project, big things coming soon :)",
            technologies: ["Next.js", "MongoDB", "React.js"]
        }
    ]
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl text-black">Projects</h2>
        <div>{projects.map((project, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <div className="w-full lg:w-1/4">
                    <img src={project.image} className="mb-6, rounded" width={150} height={150} alt={project.title} />
                </div>
                <div className="w-full max-w-xl lg:w-3/4 text-black">
                    <h6 className="mb-2 font-semibold">{project.title}</h6>
                    <p className="mb-4">{project.description}</p>
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="mr-2 mt-4 rounded bg-neutral-100 px-2 py-1 text-sm font-medium text-purple-500">{tech}</span>
                    ))}
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Projects