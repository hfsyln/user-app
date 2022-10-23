import React from "react";
import Card from "./components/card/Card";
import Person from "./components/Person/person";
import { useState } from "react";
import Footer from "./components/footer/Footer";
import axios from  "axios"
import { useEffect } from "react";



function App() {

  const [userInfo,setUserInfo]=useState()
  
  const getUser= async() =>{
    const url = "https://randomuser.me/api/";
    try{
      const {data:{results}} = await axios(url)
      console.log(results[0])
      const {
        picture: { large },
        name: { title, first, last },
        email,
        cell,
        location: { state, country },
        registered: { date, age },
      } = results[0];
      setUserInfo({
         large,
         title,
         first,
         last,
         email,
         cell,
         state,
         country,
         date,
         age,
       });
    } catch (error){
      console.log(error);
    }
  }
  // console.log(userInfo);
  useEffect(()=>{
  getUser()
  },[])
  console.log(userInfo)


  return (
    <>
      <div>
        <Person userInfo = {userInfo} getUser = {getUser}/>
      </div>
      <div>
        <Card/>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Footer />
      </div>
    
    </>
  );
}

export default App;
