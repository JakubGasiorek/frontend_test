import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {

  const [showOptions, setShowOptions] = useState(false);

  const handleReset = () => {
    
  };

  const handleAddName = () => {

  };

  return (
    <footer>
      <div className="footer__text">CSS <br /> IS <br />AWESOME</div>
      <button className="footer__button" onClick={() => setShowOptions(!showOptions)}>
        POKAŻ <FontAwesomeIcon icon={showOptions ? faAngleDown : faAngleUp}/>
      </button>
      {showOptions && (
        <div className="footer_button-options">
          <button className="footer_button-option" onClick={handleReset}><FontAwesomeIcon icon={faAngleRight}/> Zresetuj ustawienia</button>
          <button className="footer_button-option" onClick={handleAddName}><FontAwesomeIcon icon={faAngleRight}/> Pokaż dane osobowe</button>
        </div>
      )}
    </footer>
  )
}

