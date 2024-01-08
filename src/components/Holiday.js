import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleHoliday from "./SingleHoliday";
const url = "https://react--course-api.herokuapp.com/api/v1/data/vacanze";

const Holiday = () => {
  let [data,setData]=useState([]);
  let [selected,setSelected]=useState(0);
  
  
  
  // if(data.success){
  //   console.log(data.data[selected])
  // }
  
  
  // funzione per next 
  const nextHoliday= () => {
    setSelected(prevalue=>{
      if(prevalue+1 === data.data.length){
        return 0;
      }else{
        return prevalue+1
      }
    });
  }
  
  // funzione per previews 
  const previewHoliday= () => {
    setSelected(prevValue=>{
      if(prevValue -1 < 0 ){
        return data.data.length - 1 ;
      }else{
        return prevValue-1
      }
    });
  }
  
  // funzione per fetchare dati dalle api
  const getData=async()=>{
    try {
      const response=await axios.get(url)
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(()=>{
    getData()
  },[]);
  
  // Return condizionale
  if (data.success) {
    return <>
    {
      // Ternary operator per controllare il numero delle vacanze
      data.data.length > 0 ? <SingleHoliday {...data.data[selected]} next={nextHoliday} prev={previewHoliday}/> : <h4>Niente vacanze</h4>
    }
    </>
    
  }else{
    return <h3>Loading.....</h3>
  }
};

export default Holiday;