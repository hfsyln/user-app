import React from "react";
import Card from "./components/card/Card";
import Person from "./components/Person/Person"
import { useState } from "react";
import Footer from "./components/footer/Footer";
import axios from  "axios"
import { useEffect } from "react";



function App() {

  const [userInfo,setUserInfo]=useState()
  const [data, setData] = useState([])
  
 
  
  const addUser = () => {
    let user = {
      name: `${userInfo?.name?.first}`,
      email: `${userInfo?.email}`,
      phone: `${userInfo?.cell}`,
      age: `${userInfo?.dob?.age}`,
      id: `${userInfo?.id.value}`
    }
    if ((data?.filter((item) => item.id === user.id)).length) {
      alert("Same User Clicked! ")
    } else {
      setData([...data, user])
    }

  }
  
 console.log(data)


  const getUser= async() =>{
    const url = "https://randomuser.me/api/";
    try{
        const {data:{results}} = await axios(url)
        console.log(results[0])
      
        setUserInfo(results[0]);
        console.log(userInfo)
      } catch (error){
          console.log(error);
      }
    }
   console.log(userInfo);
  
   useEffect(()=>{
       
      getUser()
       
       const items = JSON.parse(localStorage.getItem('items')); //açlışta localden alma ve doma basma
       console.log(items);
       if (items) {
         setData(items);
       }
   },[])

   const clearUser = () => {
    setData([])

  }

   useEffect(() => {
    
    localStorage.setItem('items', JSON.stringify(data)); //data da gerçekleşen her değişime göre locali güncelleme örn silme
  }, [data])
  



  return (
    <>
      <div>
        <Person userInfo = {userInfo} getUser = {getUser} addUser={addUser} clearUser ={clearUser}/>
      </div>
      <div>
        <Card addUser={addUser} data = {data}/>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Footer />
      </div>
    
    </>
  );
}

export default App;
