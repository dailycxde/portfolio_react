import "./about.css";

function About(){
    return(
        <section className="about">
                <div class="p1">
                        <div>Hi</div>
                        <div>I'm <span class="n3">Hasan</span></div>
               
                    <div class="profession">
                        <div class="major"><b>Frontend Developer</b></div>
                    </div>
                    <div class="hdiv">
                        <a href="https://www.linkedin.com/in/hshkoukani">
                            <button class="hire">HIRE ME 
                                <div class="arrow">&#8594;</div>
                            </button>
                        </a>
                    </div>
                </div>

                <div class="p2">
                    <div class="dets1"><b>who am I?</b></div>
                    <div class="dets2">
                        Young and motivated software engineer based in Dubai, focused on using the latest technologies and creative solutions.
                    </div>
                </div>
        </section>
    )
}

export default About;