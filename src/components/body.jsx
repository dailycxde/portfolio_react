import "./body.css";
import { useEffect, useRef } from "react";
import Stack from "./sections/stack";
import Projects from "./sections/projects";
import Communities from "./sections/communities";
import About from "./sections/about";
import Contact from "./sections/contact";

function Body() {
    const activeSections = useRef([]);

    useEffect(() => {
        const options = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("scroll-active");
                } else {
                    entry.target.classList.remove("scroll-active");
                }
            });
        }, options);

        activeSections.current.forEach(section => {
            if (section) {
                observer.observe(section);
            }
        });
    }, []);

    return (
        <div className="parentbody">
            <video className="bg" autoPlay muted loop id="video-bg">
                <source src="/bg.mp4" type="video/mp4" />
            </video>
            <div className="body">
                {[
                    <About />,
                    <Stack />,
                    <Projects />,
                    <Communities />,
                    <Contact />,
                ].map((Section, index) => (
                    <section
                        key={index}
                        className="scroll-animate"
                        ref={(el) => (activeSections.current[index] = el)}
                    >
                        {Section}
                    </section>
                ))}
            </div>
        </div>
    );
}

export default Body;