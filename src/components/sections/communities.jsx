import "./communities.css";

function Communities(){
    const communities = [
        {id: 1, name: "GDG Nicosia", src: "/gdg.png", link: "https://tr.linkedin.com/company/gdgnicosia"},
        {id: 2, name: "CodeCrafters", src: "/cc.jpeg", link: "https://cy.linkedin.com/company/neu-biomedical-engineering-association"},
    ]


    return(
        <section id="communities" className="communities">
            <h1 className="stitle">Communities</h1>
            <h3 className="subtitle">Growth Journey</h3>
            <ul className="list">
            {communities.map((i) => {return(
                <a href={i.link} target="_blank">
                    <li className="citem" key={i.id}>
                        <img className="picture" src={i.src} />
                        <p className="itemp">{i.name}</p>
                        <div className="hover">
                            <p className="showbtn">View Community</p>
                        </div>
                    </li>
                </a>
            )})}
            </ul>
        </section>
    )
}

export default Communities;