import Heading from "../components/Heading"
import "../styles/skills.css"
import git from "../assets/git.png"
import react from "../assets/react.png"
import html from "../assets/html.png"
import github from "../assets/github.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import { motion } from "framer-motion"

const Skills = () => {
    return (
        <div id="skills">
            <Heading text="Skills" />
            <div className="row">
                <motion.img whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    src={html} alt="skill" />
                <motion.img whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    src={css} alt="skill" />
                <motion.img whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    src={javascript} alt="skill" />
            </div>
            <div className="row">
                <motion.img whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    src={git} alt="skill" />
                <motion.img whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    src={github} alt="skill" />
                <motion.img whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    src={react} alt="skill" />
            </div>
        </div>
    )
}

export default Skills