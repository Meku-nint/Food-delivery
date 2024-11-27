import { createContext, useEffect } from "react"
import { food_list } from "./admin/assets";
import React from "react";
import {useState,useContext}from'react'
export const Context=createContext(null);
const ContextProvider=(props)=>{
    const [cartitems,setcartitems]=useState(0);
    const addtocart=(id)=>{
        if(!cartitems[id]){
            setcartitems((prev)=>({prev,[id]:1}))
        } 
        else{
          setcartitems((prev)=>({...prev,[id]:prev[id]+1}))
        }
    } 
    const removefromcart=(id)=>{
      setcartitems((prev)=>({...prev,[id]:prev[id]-1}) )
    } 

    useEffect(()=>{
      console.log(cartitems);

    },[cartitems])
    const contextValue={
       food_list
       ,cartitems
       ,addtocart
       ,removefromcart
    
    }
    return (
        <Context.Provider value={contextValue}>
          {props.children}  
        </Context.Provider>
    )
}
export default ContextProvider;