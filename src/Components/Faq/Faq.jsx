import React, { useState } from "react";
import './Faq.scss'
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const QandA = [
  {
    question: "Comment créer un compte?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo laborum, vero neque enim eaque magnam eius totam voluptas. Fugiat doloremque necessitatibus iste, quaerat non officiis tempore. Exercitationem natus quaerat laudantium.",
  },
  {
    question: "Comment réserver une place?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo laborum, vero neque enim eaque magnam eius totam voluptas. Fugiat doloremque necessitatibus iste, quaerat non officiis tempore. Exercitationem natus quaerat laudantium.",
  },
  {
    question: "Combien coute un service?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo laborum, vero neque enim eaque magnam eius totam voluptas. Fugiat doloremque necessitatibus iste, quaerat non officiis tempore. Exercitationem natus quaerat laudantium.",
  },
];

function Faq() {
  const [accordion, setActiveAccordion] = useState(-1);

  function toggleAccordion(index) {
    setActiveAccordion(index);
  }

  return [
    <div className="contaner">
      <div className="accordionFaq">
        {QandA.map((item, index) => (
          <div key={index} onClick={() => toggleAccordion(index)}>
         
         <div className="wrap">
         
            <div className="Heading">
              <h3 className={accordion === index ? "active" : ""}>
                {item.question}
              </h3>
            </div>

            <div className="icone">
              {accordion === index ? (
                <span className="verticle">
                  <ArrowDropUpIcon />
                </span>
              ) : (
                <span className="verticle">
                  <ArrowDropDownIcon />
                </span>
              )}
            </div>
            </div>
            <div className="suite">
              <p className={accordion === index ? "active" : "inactive"}>
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>,
  ];
}

export default Faq;
