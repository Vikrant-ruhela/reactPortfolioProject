import Heading from "../components/Heading"
import "../styles/project.css"
import Card from "./Card";
import { useState } from "react";
import frontend1 from "../assets/frontend1.png"
import frontend2 from "../assets/frontend2.png"

const Projects = () => {
    let [frontendProject, setfrontendProject] = useState(true)
    let [button1, selectbutton1] = useState(true)
    let [button2, selectbutton2] = useState(false)

    let design = {
        border: '1px solid #222831',
        backgroundColor: '#222831',
        color: '#fff'
    }
    console.log("state");
    return (
        <div id="projects">
            <Heading text="My Recent Work" fontsize={"4rem"} />
            <div className="stateButtons">
                <button id="frontendWork" onClick={() => { setfrontendProject(true); selectbutton1(true); selectbutton2(false) }} style={button1 ? design : null} >Frontent Work</button>
                <button id="backendWork" onClick={() => { setfrontendProject(false); selectbutton2(true); selectbutton1(false) }} style={button2 ? design : null} >Backend Work</button>
            </div>
            <div className="projectWork">
                {frontendProject ? <> <Card src={frontend1} text={'Frontend project with html,css'} />
                    <Card src={frontend2} text={'Frontend project with Reactjs'} />
                </> : <>
                    <Card src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" text={'Api project with express'} />
                    <Card src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" text={'Auth using Json web token'} />
                </>
                }

            </div>
        </div>
    )
}

export default Projects