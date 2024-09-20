import "./about.css";

function About(){
    return(
        <section className="about">
                <div className="p1">
                        <div>Hi</div>
                        <div>I'm <span className="n3">Hasan</span></div>
               
                    <div className="profession">
                        <div className="major"><b>Frontend Developer</b></div>
                    </div>
                    <div className="hdiv">
                        <a href="https://www.linkedin.com/in/hshkoukani">
                            <button className="hire">HIRE ME 
                                <div className="arrow">&#8594;</div>
                            </button>
                        </a>
                    </div>
                </div>

                <div className="p2">
                    <div className="dets1"><b>who am I?</b></div>
                    <div className="dets2">
                        Young and motivated software engineer based in Dubai, focused on using the latest technologies and creative solutions.
                    </div>
                </div>
        </section>
    )
}

export default About;