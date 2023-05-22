import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleQuestion = ({ title, info }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => setToggle(!toggle)}>
          {!toggle ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      {toggle && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion;
