import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Wrapper, Aside, ButtonContainer, Text, Button } from "./Navbar.styles";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [myWindow, setWindow] = useState(window);
  const [activePage, setActivePage] = useState({log: false, signUp:false, review: false, about: false});

  const logRef = React.useRef();
  const signUpRef = React.useRef();
  const reviewRef = React.useRef();
  const aboutRef = React.useRef();

  // React.useEffect(()=>{
  //     console.log(window.location.href);
  // },[myWindow])


  const currentPage = () => {
    if (logRef.current.href === myWindow.location.href) {
      setActivePage((prevActivePage) => {
          return {...prevActivePage, log: !prevActivePage.log,
      }});
    }
    if (signUpRef.current.href === myWindow.location.href) {
       setActivePage((prevActivePage) => {
          return {...prevActivePage, signUp: !prevActivePage.signUp,
      }});
    }
    if (aboutRef.current.href === myWindow.location.href) {
      setActivePage((prevActivePage) => {
          return {...prevActivePage, about: !prevActivePage.about,
      }});
    }
    if (reviewRef.current.href === myWindow.location.href) {
       setActivePage((prevActivePage) => {
          return {...prevActivePage, review: !prevActivePage.review,
      }});
    }
  };

  let logStyles;
  let signStyles;
  let aboutStyles;
  let reviewStyles;
      if(activePage.log === true){
         logStyles={
              backgroundColor: 'green',
              color: '#fff',
          }
      }
      if(activePage.signUp === true){
          signStyles={
              backgroundColor: 'green',
              color: '#fff',
          }
      }
      if(activePage.about === true){
          aboutStyles={
              backgroundColor: 'green',
              color: '#fff',
          }
      }
      if(activePage.review === true){
          reviewStyles={
              backgroundColor: 'green',
              color: '#fff',
          }
      }

  return (
    <Wrapper>
      <nav className="navbar">
        <Link to="./" className="logo">
          <h5>LOGO</h5>
        </Link>
        <div className="btn-container">
          <Link to="./dashboard" ref={logRef}>
            <Button className="log" onClick={currentPage}
            style={logStyles}>
              Log In
            </Button>
          </Link>
          <Link to="./signup" ref={signUpRef}>
            <Button className="sign" onClick={currentPage}
            style={signStyles}>
              Sign up
            </Button>
          </Link>
          <Link to="./about" ref={aboutRef}>
            <Button className="about" onClick={currentPage}
            style={aboutStyles}>
              About
            </Button>
          </Link>
          <Link to="./review" ref={reviewRef}>
            <Button className="review" onClick={currentPage}
            style={reviewStyles}>
              Reviews
            </Button>
          </Link>
        </div>
        <div className="menu-btn">
          <Button
            onClick={() => setShowMenu((prevState) => (prevState = !showMenu))}
            className="menu"
          >
            Menu
          </Button>
        </div>
      </nav>
      <Aside>
        <div className={showMenu ? "sidebar show-sidebar" : "sidebar"}>
          <Link to="./">
            <Button className="home">Home</Button>
          </Link>
          <Link to="./dashboard">
            <Button className="log">Log In</Button>
          </Link>
          <Link to="./signup">
            <Button className="sign">Sign up</Button>
          </Link>
          <Link to="./about">
            <Button className="about">About</Button>
          </Link>
          <Link to="./review">
            <Button className="review">Reviews</Button>
          </Link>
        </div>
      </Aside>
    </Wrapper>
  );
}
