import "./contact.css";

function Contact() {
    return(
        <section id="contact" className="contact">
            <h1 className="stitle">Contact Me</h1>
            <h3 className="subtitle">Share your Thoughts with me!</h3>

            <div className="window">
                <form className="form" netlify>
                    <div className="f1">
                        <input id="name" type="name" name="name" placeholder="john smith" />
                        <input id="email" type="email" name="email" placeholder="johnsmith@gmail.com" required />
                    </div>
                    <div className="f2">
                        <textarea name="message" id="message" rows="3" placeholder="type your message here" required />
                    </div>
                    <input id="submit" type="submit" required />
                </form>
            </div>
        </section>
    )
}



export default Contact;