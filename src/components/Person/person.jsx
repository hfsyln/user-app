import React from 'react'
import mailSvg from "../../assets/mail.svg";
import manSvg from "../../assets/man.svg";
import womanSvg from "../../assets/woman.svg";
import manAgeSvg from "../../assets/growing-up-man.svg";
import womanAgeSvg from "../../assets/growing-up-woman.svg";
import mapSvg from "../../assets/map.svg";
import phoneSvg from "../../assets/phone.svg";
import padlockSvg from "../../assets/padlock.svg";
import cwSvg from "../../assets/cw.svg"
import { useState } from 'react';

const Person = ({userInfo, getUser, addUser}) => {

    
    const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";
   

    const [pasw, setPasw] = useState(false);
    const [tel, setTel] = useState(false);
    const [loca, setLoca] = useState(false);
     const [yas, setYas] = useState(false);
     const [is, setIs] = useState(false);
     const [mek, setMek] = useState(false);
  
    return (
    <main>
    <div className="block bcg-orange">
      <img src={cwSvg} alt="cw" id="cw" />
    </div>
    <div className="block">
      <div className="container">
       <img src={userInfo?.picture.large} alt="random user" className="user-img" />
        {is && <p className="user-title">Name: {userInfo?.name.title} {userInfo?.name.first} {userInfo?.name.last}</p>}
        {mek && <p className="user-title">Email: {userInfo?.email}</p>}
        {yas && <p className="user-title">Age: {userInfo?.dob.age}</p>}
        {loca && <p className="user-title">Loc: {userInfo?.location.country}</p>}
        {tel && <p className="user-title">Phone: {userInfo?.cell}</p>}
        {pasw && <p className="user-title">Pasw: {userInfo?.login.password}</p>}
        <div className="values-list">
         <button className="icon" data-label="name" onClick={(e) => setIs(!is)}>
            <img  src={userInfo?.gender === "female" ? womanSvg : manSvg} alt="user" id="iconImg" /> 
          </button>
          <button className="icon" data-label="email"  onClick={(e) => setMek(!mek)}>
            <img src={mailSvg} alt="mail" id="iconImg" />
          </button>
          <button className="icon" data-label="age" onClick={(e) => setYas(!yas)}>
            <img src={userInfo?.gender === "female" ? womanAgeSvg : manAgeSvg} alt="age" id="iconImg" />
          </button>
          <button className="icon" data-label="street" onClick={(e) => setLoca(!loca)}>
            <img src={mapSvg} alt="map" id="iconImg" />
          </button>
          <button className="icon" data-label="phone" onClick={(e) => setTel(!tel)}>
            <img src={phoneSvg} alt="phone" id="iconImg" />
          </button>
          <button className="icon" data-label="password" onClick={(e) => setPasw(!pasw)}>
            <img src={padlockSvg} alt="lock" id="iconImg" />
          </button>
        </div>
        <div className="btn-group">
          <button className="btn" type="button " onClick={getUser}>
            new user
          </button>
          <button className="btn" type="button" onClick={addUser} >
            add user 
          </button>
        </div>

      </div>
    </div> 
    </main>
  )
}

export default Person;