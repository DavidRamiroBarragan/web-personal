import { Link } from "react-router-dom"
import "./LinkContainer.scss"
import classNames from "classnames"

function LinkContainer({ closeModalHandler, openModal }) {
  return (
    <ul className={classNames("link-container", { "nav-bar": !openModal })}>
      <li onClick={closeModalHandler} className="link-container__link">
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li onClick={closeModalHandler} className="link-container__link">
        <Link to="/about-page">Sobre davidramiro.com</Link>
      </li>
      <li onClick={closeModalHandler} className="link-container__link">
        <Link to="/about-me">Sobre mi</Link>
      </li>
    </ul>
  )
}

export default LinkContainer
