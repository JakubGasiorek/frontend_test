
export default function  Header({myName}) {
  return (
    <header>
      <a href="/">
        <img src="/logo.png" alt="Logo HTML5" id="logo" className="header__logo"/>
      </a>
      <div>
        <p className="header__text">Zadanie <strong>rekrutacyjne</strong></p>
        {myName && <p className="header__text">{myName}</p>}
      </div>
    </header>
  )
} 

