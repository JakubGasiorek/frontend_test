import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Footer({ addName, handleReset }) {
  const [showOptions, setShowOptions] = useState(false);

  const handleAddName = () => {
    addName("Jakub Gąsiorek");
  };

  const handleResetAndClose = () => {
    handleReset();
    setShowOptions(false); // Ukrycie opcji po kliknięciu
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions); // Toggle pokazywania opcji
  };

  // Funkcja obsługująca zamknięcie opcji po kliknięciu w obszarze poza opcjami
  const handleOutsideClick = (e) => {
    if (!e.target.closest(".footer__button-container")) {
      setShowOptions(false);
    }
  };

  // Dodanie nasłuchiwania na kliknięcie w całym dokumencie, aby obsłużyć kliknięcie poza opcjami
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <footer>
      <div className="footer__text">
        CSS <br /> IS <br />
        AWESOME
      </div>
      <h3 className="footer__h3">nabthat</h3>
      <div className={`footer__button-container ${showOptions ? "open" : ""}`}>
        <button
          className="footer__button"
          aria-expanded={showOptions}
          onClick={toggleOptions}
        >
          POKAŻ <FontAwesomeIcon icon={showOptions ? faAngleDown : faAngleUp} />
        </button>
        <div className={`footer_button-options ${showOptions ? "show" : ""}`}>
          <button className="footer_button-option" onClick={handleResetAndClose}>
            <FontAwesomeIcon icon={faAngleRight} /> Zresetuj ustawienia
          </button>
          <button className="footer_button-option" onClick={handleAddName}>
            <FontAwesomeIcon icon={faAngleRight} /> Pokaż dane osobowe
          </button>
        </div>
      </div>
    </footer>
  );
}
