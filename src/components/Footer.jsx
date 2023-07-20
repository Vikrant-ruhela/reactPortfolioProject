import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
    return (
        <div>Footer
            <Link to="/#home" smooth>Home</Link>
            <Link to="/#projects" smooth>Projects</Link>
            <Link to="/#contact" smooth>Contact</Link>
            <Link to="/#about" smooth>About</Link>
        </div>
    )
}

export default Footer