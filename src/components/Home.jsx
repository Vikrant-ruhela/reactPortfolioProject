import "../styles/Home.css"
import Heading from "./Heading"
import Paragraph from "./Paragraph"
import ProfilePic from "../assets/profilePic.png"

function Home() {
    return (
        <div id="home">
            <Heading text="MERN STACK WEB DEVELOPER" className="heading" />
            <Paragraph text="I design and code beautifully simple things, and I love what I do." className="para" />
            <img src={ProfilePic} alt="profilepic" />
        </div>
    )
}



export default Home