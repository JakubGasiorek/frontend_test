import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faAngleDown,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer({ addName, handleReset }) {
  const [showOptions, setShowOptions] = useState(false);

  const handleAddName = () => {
    addName("Jakub Gąsiorek");
  };

  return (
    <footer>
      <div className="footer__text">
        CSS <br /> IS <br />
        AWESOME
      </div>
      <h3 className="footer__h3">nabthat</h3>
      <button
        className="footer__button"
        onClick={() => setShowOptions(!showOptions)}
        aria-expanded={showOptions}
        aria-haspopup="true"
      >
        POKAŻ <FontAwesomeIcon icon={showOptions ? faAngleDown : faAngleUp} />
      </button>
      {showOptions && (
        <div className="footer_button-options">
          <button className="footer_button-option" onClick={handleReset}>
            <FontAwesomeIcon icon={faAngleRight} /> Zresetuj ustawienia
          </button>
          <button className="footer_button-option" onClick={handleAddName}>
            <FontAwesomeIcon icon={faAngleRight} /> Pokaż dane osobowe
          </button>
        </div>
      )}
    </footer>
  );
}
