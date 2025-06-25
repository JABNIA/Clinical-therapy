
import { NavLink } from "react-router-dom"
import { NavMobileWrapper, NavTabletWrapper, NavWrapper } from "../styles/nav-styled"
import { useLocation } from "react-router";
import useScreenSize from "../hooks/useScreenSize";
import { useState } from "react";

function Nav() {
    const page = useLocation();
    const {width} = useScreenSize();

    
  if(width >= 1300){
  return (
    <NavWrapper>
      <NavLargeComponent page={page.pathname}/>
    </NavWrapper>
  )
}

  if(width >= 769){
   return (
    <NavTabletWrapper>
      <NavTabletComponent page={page.pathname}/>
    </NavTabletWrapper>
  ) 
  }

  if(width <= 769){
   return (
    <NavMobileWrapper>
      <NavMobileComponent page={page.pathname}/>
    </NavMobileWrapper>
  ) 
  }
}

export default Nav;


function NavLargeComponent({page}:{page: string}){

  return (
      <ul>
        <li><NavLink to="/" className={page === "/" ? "nav-link active" : "nav-link"}>Home</NavLink></li>
        <li><NavLink to="about" className={page === "/about" ? "nav-link active" : "nav-link"}>About me</NavLink></li>
        <li><NavLink to="therapy" className={page === "/therapy" ? "nav-link active" : "nav-link"}>Therapy</NavLink></li>
        <li><NavLink to="contact" className={page === "/contact" ? "nav-link active" : "nav-link"}>Contact/Book visit</NavLink></li>
      </ul>
  );
}

function NavTabletComponent({page}:{page: string}){

  return (
      <ul>
        <li><NavLink to="/" className={page === "/" ? "nav-link active" : "nav-link"}>Home</NavLink></li>
        <li><NavLink to="about" className={page === "/about" ? "nav-link active" : "nav-link"}>About me</NavLink></li>
        <li><NavLink to="therapy" className={page === "/therapy" ? "nav-link active" : "nav-link"}>Therapy</NavLink></li>
        <li><NavLink to="contact" className={page === "/contact" ? "nav-link active" : "nav-link"}>Contact/Book visit</NavLink></li>
      </ul>
  );
}

function NavMobileComponent({page}:{page: string}){
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
    <div onClick={() => setOpen(prev => !prev)} style={{textAlign: "center", paddingTop: "10px"}}>
      <svg width="40px" height="40px" viewBox="0 0 12 12" enable-background="new 0 0 12 12" id="Слой_1" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <rect fill="#d3cab8" height="1" width="11" x="0.5" y="5.5"></rect> <rect fill="#d3cab8" height="1" width="11" x="0.5" y="2.5"></rect> <rect fill="#d3cab8" height="1" width="11" x="0.5" y="8.5"></rect> </g> </g></svg>
    </div>
    {
      open && 
      <ul>
        <li><NavLink to="/" className={page === "/" ? "nav-link active" : "nav-link"}>Home</NavLink></li>
        <li><NavLink to="about" className={page === "/about" ? "nav-link active" : "nav-link"}>About me</NavLink></li>
        <li><NavLink to="therapy" className={page === "/therapy" ? "nav-link active" : "nav-link"}>Therapy</NavLink></li>
        <li><NavLink to="contact" className={page === "/contact" ? "nav-link active" : "nav-link"}>Contact/Book visit</NavLink></li>
      </ul>
    }
    </>
      )
}