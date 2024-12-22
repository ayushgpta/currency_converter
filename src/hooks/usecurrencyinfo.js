import { useState,useEffect } from "react";

function usecurrencyinfo(currency){
    const [data,setdata]=useState({});
  
    useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
     .then((res)=>{return res.json()}).then((res)=>setdata(res[currency]))

    },[currency])
    return data;

}
export default usecurrencyinfo