import { HashLink as Link } from "react-router-hash-link";
import { FaVuejs } from "react-icons/fa";
import "../styles/Header.css"

const Header = () => {
    return (
        <nav>
            <FaVuejs className="icon" />
            <main>
                <Link to="/#home" smooth className="link">Home</Link>
                <Link to="/#projects" smooth className="link">Projects</Link>
                <Link to="/#contact" smooth className="link">Contact</Link>
                <Link to="/#about" smooth className="link">About</Link>
                <button>Resume</button>
            </main>

        </nav>

    )
}

export default Header