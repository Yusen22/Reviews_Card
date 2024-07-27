import { FaArrowLeft } from "react-icons/fa"
import { FaArrowRight } from "react-icons/fa"

const Review = (review) => {
    return (
        <div>
            <img src={image} />
            <h3>{name}</h3>
            <h5>{job}</h5>
            <p>{text}</p>
            <div>
                <FaArrowLeft className="arrow-left"></FaArrowLeft>
                <FaArrowRight className="arrow-right"></FaArrowRight>
            </div>
        </div>
    )
}
export default Review