import "./body.css";
import Stack from "./sections/stack";
import Projects from "./sections/projects";
import Communities from "./sections/communities";
import About from "./sections/about";
import Contact from "./sections/contact";

function Body(){
    return (
        <div className="parentbody">
            <video className="bg" autoPlay muted loop id="video-bg">
                <source src="/bg.mp4" type="video/mp4" />
            </video>
            <div className="body">
                <About />
                <Stack />
                <Projects />
                <Communities />
                <Contact />
            </div>
        </div>
    )   
}

export default Body;