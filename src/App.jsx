import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaQuoteRight } from 'react-icons/fa';

import Review from "./Review";

import data from './data'

const App = () => {
  const [index, setIndex] = useState(0)
  const { image, name, job, text } = data[index]

const randomPerson = () => {
  let randomIndex = Math.floor(Math.random() * data.length)
  if (randomIndex === index && index !== data.length - 1) {
    randomIndex = index + 1 
  } 
  if (randomIndex === index && index === data.length -1 ) {
    randomIndex = index - 1
  }
  setIndex(randomIndex)
}
  return (
    <main>
      <h2 className="title">Reviews Starter</h2>
      <article className="review">
        <div className="img-container">
          <img className="img person-img" src={image} alt={name} />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h3 className="author">{name}</h3>
        <h5 className="job">{job}</h5>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn">
            <FaArrowLeft className="arrow-left" onClick={() => setIndex(index === 0 ? data.length - 1 : index - 1)}></FaArrowLeft>
          </button>
          <button className="next-btn">
            <FaArrowRight className="arrow-right next-btn" onClick={() => setIndex(data.length - 1 === index ? 0 : index + 1)}></FaArrowRight>
          </button>
        </div>
        <button onClick={randomPerson} className="bn btn-hipster">Random review</button>
      </article>
    </main>
  )
};
export default App;
