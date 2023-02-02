import { useEffect, useState } from "react";
import "./Collapse.scss";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

export default function Collapse({ title, content , open}) {
  const [isOpen, setIsOpen] = useState(open);
  const [contentHeight, setContentHeight] = useState(0);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  //      useEffect(() => {
  //         if(isOpen)
  //         {
  //             setContentHeight(size);

  //         }
  //         else
  //         {
  //             setContentHeight(0);

  //         }

  //  },[isOpen])
  return (
    <div onClick={() => handleOpen()} className="collapse-container">
      <h3>
        {title} {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </h3>
      <div className={isOpen ? "offset offset__open" : "offset"}>
        {typeof content === "object" ? (
          <ul>
            {content.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        ) : (
          content
        )}
      </div>
      {/* {isOpen === true ? <div className="offset offset__open">{description}</div> : <div className="offset offset__close">{description}</div>} */}
    </div>
  );
}
