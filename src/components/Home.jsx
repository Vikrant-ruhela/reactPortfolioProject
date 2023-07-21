import "../styles/Home.css"
import Paragraph from "./Paragraph"
import ProfilePic from "../assets/profilePic.png"
import Typewriter from 'react-ts-typewriter';


function Home() {

    return (
        <div id="home">
            <h1>
                <Typewriter text={['MERN STACK WEB DEVELOPER', 'FULL STACK WEB DEVELOPER']} loop={true} delay={100} speed={300} />
            </h1>
            <Paragraph text="I design and code beautifully simple things, and I love what I do." fontsize="1.2rem" />
            <img src={ProfilePic} alt="profilepic" />
        </div>
    )
}



export default Home