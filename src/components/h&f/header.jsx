import "./header.css"

function Header() {
    return (
        <header>
            <div className="s1">
                <h1 className="title">hshkoukani</h1>
            </div>
            <nav className="s2">
                <ul className="navigation">
                    <a href="#stack"><li>stack</li></a>
                    <a href="#projects"><li>projects</li></a>
                    <a href="#communities"><li>communities</li></a>
                    <a href="#about"><li>about me</li></a>
                </ul>
            </nav>
        </header>
    )
}


export default Header;