import React, { useState, useRef } from "react";
import Chevron from "./Chevron";

import "./Accordion.css";
import IdeasApiService from "../../services/ideas-api-service";

/* this is an 'accordion' component that I used to house each of the user's
 idea. c/o with some personalised modifications:
 https://medium.com/skillthrive/build-a-react-accordion-component-from-scratch-using-react-hooks-a71d3d91324b */

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  const handleClickDelete = e => {
    e.preventDefault()
    const ideaId = props.id
    IdeasApiService.deleteIdea(ideaId)
     .then(() => props.onDeleteSuccess())
     .catch(error=>console.error({error}))
  }

  return (
    <div className="accordion__section">
      <div className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p className="accordion__title">{props.title}</p>
        <Chevron className={`${setRotate}`} width={10} fill={"#EFEBE9"} />
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
        <button type='button' className='delete_idea' onClick={handleClickDelete}>
            Delete Idea {/* added this button for idea deletion function */}
        </button>
      </div>
    </div>
  );
}

export default Accordion;
