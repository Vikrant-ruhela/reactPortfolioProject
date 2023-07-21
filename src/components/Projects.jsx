import Heading from "../components/Heading"
import "../styles/projects.css"

const Projects = () => {
    return (
        <div id="projects">
            <Heading text="My Recent Work" />
            <div className="stateButtons">
                <button id="frontendWork">Frontent Work</button>
                <button id="backendWork">Backend Work</button>
            </div>
            <div className="projectWork">
                <div className="card">

                </div>
            </div>
        </div>
    )
}

export default Projects