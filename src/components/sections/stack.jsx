import "./stack.css";

function Stack(){
    const stack = [
        {id: 1, name: "React", rating: 5, src: "/react.png"},
        {id: 2, name: "Flask", rating: 4, src: "/flask.png"},
        {id: 3, name: "Arduino", rating: 4, src: "/arduino.png"},
    ]

    function handleRating(rating){

        let total = 5;
        var data = [];

        for(let i=0; i<total; i++){
            if(i<rating){
                data.push(<span key={i} className="star">&#9733;</span>)
            }
            else{
                data.push(<span key={i} className="star">&#9734;</span>)
            }
        }

        return data;
    }

    return(
        <section id="stack" className="stack">
            <h1 className="stitle">Tech Stack</h1>
            <h3 className="subtitle">Technologies I use</h3>
            <ul className="list">
            {stack.map((i) => {return(
                <li className="stackitem" key={i.id}>
                    <img className="picture" src={i.src} />
                    <p className="itemp">{i.name}</p>
                    <div className="hover rating">{handleRating(i.rating)}</div>
                </li>
            )})}
            </ul>
        </section>
    )
}

export default Stack;