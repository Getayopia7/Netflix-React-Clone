import React, { useEffect, useState } from 'react'
import "./Nav.css";
function Nav() {
  const [show, setShow]=useState(false);
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY >100){
        setShow(true)
      }else setShow(false)
    });
    return ()=>{
      // window.removeEventListener("scroll");
    };

  },[]);
  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img 
        className='nav_logo'
        src='https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg'
        alt="Netflix Logo"
        />
        <img
        className='nav_avatar'
        src='https://occ-0-1479-1480.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABR2_CnwLC_fGf1EGaAxpU3cAzAwjj4q3yVg_n99iZREET5eSWAZ_B0kemHB5GOEPXtk7ekGULELzDrWZk4WCAULubeSwxTg_UQ.png?r=229'
        alt='Avatar Logo'
        />
    </div>
  );
}

export default Nav;
