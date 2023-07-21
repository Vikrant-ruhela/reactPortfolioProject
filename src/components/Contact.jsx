import "../styles/contact.css"
import Heading from "./Heading"


const Contact = () => {
    return (
        <div id="contact">
            <div className="left">
                <Heading text="Let's Talk" fontsize={"4rem"} />
            </div>
            <div className="right">
                <form action="">
                    <div className="basicDetails">
                        <div className="name">
                            <label htmlFor="name">Your name</label>
                            <input type="text" name="name" id="name" placeholder="Name" autoComplete="off" />
                        </div>
                        <div className="email">
                            <label htmlFor="email">Your email</label>
                            <input type="email" name="email" id="email" placeholder="Email" autoComplete="off" />
                        </div>
                    </div>
                    <div className="message">
                        <label htmlFor="message">Your Message</label>
                        <input type="text" name="message" id="message" placeholder="Message" autoComplete="off" />
                    </div>
                    <button type="submit" id="submit">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default Contact