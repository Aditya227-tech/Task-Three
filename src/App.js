import "./App.css";
import Popup from "./Components/Popup";
import { useState } from "react";

function App() {
  const [isPopup, setIsPopup] = useState(false);

  const closePopup = () => {
    return setIsPopup(false);
  };

  return (
    <div className="App">
      <h1 className="title">Please Fill The Details</h1>
      <div className="button-row">
        <button onClick={() => setIsPopup(true)} className="btn-popup">
          Click Here
        </button>
      </div>

      <Popup isPopup={isPopup} closePopup={closePopup}>
        <h3>My Popup</h3>
      </Popup>
    </div>
  );
}

export default App;
