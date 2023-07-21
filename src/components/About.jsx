import "../styles/about.css"
import computer from "../assets/computer.png"
import Heading from "../components/Heading"

const About = () => {
    return (

        <div id="about" >
            <div className="left">
                <Heading text="About Me" />
                <p> Welcome to my Portfolio! I am Vikrant Ruhela, an aspiring MERN Stack Web Developer and a passionate tech enthusiast pursuing my B.Tech in Computer Science and Engineering. I have a strong foundation in web development and a keen interest in building dynamic and user-friendly applications.With a focus on the MERN (MongoDB, Express.js, React.js, Node.js) stack, I have honed my skills in front-end and back-end development.
                </p>

            </div>
            <img src={computer} alt="computer" />
        </div>
    )
}

export default About