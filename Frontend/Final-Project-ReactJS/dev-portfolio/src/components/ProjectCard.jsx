function ProjectCard({title,description,image}){

    return(

        <div className="border rounded-lg p-5 shadow">

            <img src={image} alt={title}/>

            <h2>{title}</h2>

            <p>{description}</p>

        </div>

    );

}

export default ProjectCard;