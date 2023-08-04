import React, { useEffect, useState } from 'react'
import './Nav.css'
function Nav() {
  const [ show, handleShow ] = useState(false);

  const transitionNavBar = () =>{
    if (window.scrollY > 100) {
      handleShow(true);
    }else {
      handleShow(false)
    }

  }
    
  useEffect(() => {
    window.addEventListener("scroll" , transitionNavBar);

    return () => window.removeEventListener("scroll" , transitionNavBar);
  
  },[])


  return (
    <div className={`nav  ${ show &&"nav__black"}`}>
        <div className="nav__contents">
            <img  className="nav__logo"src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
            <img  className="nav__avatar" src="https://i.pinimg.com/550x/b6/77/cd/b677cd1cde292f261166533d6fe75872.jpg" alt="" />
        {/* <h1>This is the nav</h1> */}

        </div>
    </div>
  )
}

export default Nav