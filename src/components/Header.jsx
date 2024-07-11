import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";

export default function Header({ myName }) {
  return (
    <header>
      <a href="/">
        <FontAwesomeIcon className="header__logo" icon={faHtml5} />
      </a>
      <div>
        <p className="header__text">
          Zadanie <strong>rekrutacyjne</strong>
        </p>
        {myName && <p className="header__text">{myName}</p>}
      </div>
    </header>
  );
}
