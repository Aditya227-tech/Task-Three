import React, { useEffect, useRef, useState } from "react";
import "./Popup.css";

function Popup({ isPopup, closePopup }) {
  const mainElement = useRef();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [classValue, setClassValue] = useState("");

  useEffect(() => {
    const handleClick = (e) => {
      if (mainElement.current === e.target) {
        closePopup(false);
      }
    };
    document.addEventListener("click", handleClick);

    return function cleanUp() {
      document.removeEventListener("click", handleClick);
    };
  }, [closePopup]);

  return (
    isPopup && (
      <div className="popup" ref={mainElement}>
        <div className="popup-inner">
          <header>
            <h2>Student Details</h2>
          </header>

          <div className="input-container">
            <div className="input-group">
              <label htmlFor="nameInput">Name</label>
              <input
                id="nameInput"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="input-row">
              <div className="input-group">
                <label htmlFor="ageInput">Age</label>
                <input
                  id="ageInput"
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="classInput">Class</label>
                <input
                  id="classInput"
                  type="text"
                  value={classValue}
                  onChange={(e) => setClassValue(e.target.value)}
                  required
                />
              </div>
            </div>

            <button
              className="close-btn"
              onClick={() => {
                closePopup(false);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default Popup;
