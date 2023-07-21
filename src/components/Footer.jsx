import { HashLink as Link } from "react-router-hash-link";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "../styles/footer.css"

const Footer = () => {
    return (
        <div id="footer">
            <div className="linksfooter">
                <Link to="/#home" smooth className="linkfooter">Home</Link>
                <Link to="/#skills" smooth className="linkfooter">Skills</Link>
                <Link to="/#projects" smooth className="linkfooter">Projects</Link>
                <Link to="/#contact" smooth className="linkfooter">Contact</Link>
                <Link to="/#about" smooth className="linkfooter">About</Link>
            </div>
            <div className="iconsfooter">
                <FaWhatsapp className="iconfooter" />
                <FaInstagram className="iconfooter" />
                <FaLinkedin className="iconfooter" />
            </div>

        </div>
    )
}

export default Footer