import Paragraph from "./Paragraph"
import "../styles/card.css"

const Card = ({ src, text }) => {
    return (
        <div className="card">
            <img src={src} />
            <Paragraph text={text} fontsize={'1.2rem'} />
        </div>
    )
}

export default Card