import { NavLink } from "react-router-dom"
import { NavWrapper } from "../styles/nav-styled"
import { useLocation } from "react-router";

function Nav() {
    const page = useLocation();

    console.log(page)
  return (
    <NavWrapper>
      <ul>
        <li><NavLink to="/" className={page.pathname === "/" ? "nav-link active" : "nav-link"}>Home</NavLink></li>
        <li><NavLink to="about" className={page.pathname === "/about" ? "nav-link active" : "nav-link"}>About me</NavLink></li>
        <li><NavLink to="therapy" className={page.pathname === "/therapy" ? "nav-link active" : "nav-link"}>Therapy</NavLink></li>
        <li><NavLink to="contact" className={page.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact/Book visit</NavLink></li>
      </ul>
    </NavWrapper>
  )
}

export default Nav
