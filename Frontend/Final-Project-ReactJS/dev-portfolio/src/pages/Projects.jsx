import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

function Projects(){

    return(

    


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto py-20">

            {

                projects.map((project)=>(

                    <ProjectCard

                        key={project.id}

                        {...project}

                    />

                ))

            }

        </div>

    );

}

export default Projects;