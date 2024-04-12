import styled from "styled-components";
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {

    return <Nav>
        <Link to="/">
            <Logo>
                <img src="https://cdn.dribbble.com/userupload/9030623/file/original-6390afdf61d271095b2fcf2fbdb329bb.jpg?resize=400x0" alt="Disney+" />
            </Logo>
        </Link>
        <>
            <NavMenu>
                <Link to="/consult" className="nav-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Consult
                </Link>
                <Link to="/order" className="nav-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Order
                </Link>
                <Link to="/prediction" className="nav-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Prediction
                </Link>
                <Link to="/about" className="nav-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    About
                </Link>
                <Link to="/login" className="nav-menu nav">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    SIGN UP
                </Link>
            </NavMenu>
        </>
    </Nav>
};


const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: fit-content;
    height: 60px;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
`;

export default Navbar;