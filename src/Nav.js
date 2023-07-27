import React, { useEffect, useState } from "react";
import "../src/Nav.css";
import { useNavigate } from "react-router-dom";

function Nav() {

    const [show, handleShow]=useState(false);
    const history = useNavigate();

    const transitionNavBar = () =>{
        if(window.scrollY > 100){
            handleShow(show => true);
        }
        else{
            handleShow(show => false);
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",transitionNavBar );
        return () => window.removeEventListener('scroll', transitionNavBar);
    },[]);
  return (
    <div className={`nav ${show && `nav_black`}`}>
      <div className="nav_contents">
        <img
         onClick={() => history("/home")}
          className="nav_logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-drawing-png-19.png"
          alt="logo"
        />
        <img
         onClick={() => history("/profile")}
          className="nav_avatar"
          src="https://tse1.mm.bing.net/th?id=OIP.uDtPlCTKLnrQW_ipwKsCJAHaHa&pid=Api&P=0&h=180"
          alt="avatar"
        />
      </div>
    </div>
  );
}
export default Nav;
