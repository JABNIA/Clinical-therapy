import { HeaderWrapper } from "../styles/header-styled"
import Nav from "./Nav"

function Header() {
  return (
    <>
    <HeaderWrapper >
      <h1 className="heading">Clinical Psychologist - <span className="signature">Anna Margishvili</span></h1>
    </HeaderWrapper>
    <Nav />
    </>
      
  )
}

export default Header
