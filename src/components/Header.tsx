import useScreenSize from "../hooks/useScreenSize";
import { HeaderMobileWrapper, HeaderTabletWrapper, HeaderWrapper } from "../styles/header-styled"
import Nav from "./Nav"

function Header() {
  const {width} = useScreenSize()


  if(width >= 1300){
    return (
      <>
        <HeaderWrapper >
          <HeaderLargeComponent />
        </HeaderWrapper>
          <Nav />
      </>   
    )
  }
  if(width >= 769){
    return (
      <>
        <HeaderTabletWrapper>
          <HeaderTabletComponment />
        </HeaderTabletWrapper>
          <Nav />
      </>
    )
  }

if(width <= 769){
    return (
      <>
        <HeaderMobileWrapper>
          <HeaderMobileComponent />
        </HeaderMobileWrapper>
          <Nav />
      </>
    )
  }
}

export default Header;


function HeaderLargeComponent() {
  return (
    <>
      <h1 className="heading">Clinical Psychologist - <span className="signature">Anna Margishvili</span></h1>
    </>
  )
};


function HeaderTabletComponment() {
  return (
    <>
      <h1 className="heading">Clinical Psychologist - <span className="signature">Anna Margishvili</span></h1>
    </>
  ) 
};


function HeaderMobileComponent() {
  return (
    <>
      <h1 className="heading">Clinical Psychologist - <span className="signature">Anna Margishvili</span></h1>
    </>
  )
}