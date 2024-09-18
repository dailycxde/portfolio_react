import "./projects.css";

function Projects(){
    const projects = [
        {id: 1, name: "eCommerce Frontend", src: "/react.png", show: false, link: "https://hshkoukani-paradisenursery.netlify.app/"},
        {id: 2, name: "RGB Led Strip", src: "/arduino.png", show: false, link: "https://www.tinkercad.com/things/1pRDMiVGglL-project"},
        {id: 3, name: "eCommerce Frontend", src: "/vanilla.png", show: false, link: "#"},
    ]

    return(
        <section id="projects" className="project">
            <h1 className="stitle">Projects</h1>
            <h3 className="subtitle">Projects Describe the Best</h3>
            <ul className="list">
            {projects.map((i) => {return(
                <a href={i.link} target="_blank">
                <li className="projectitem" key={i.id}>
                    <img className="picture" src={i.src} />
                    <p className="itemp">{i.name}</p>
                    <div className="hover" >
                        <p className="showbtn">View Project</p>
                    </div>
                </li>
                </a>
            )})}
            </ul>
        </section>
    )
}

export default Projects;