import React from 'react'
import './home.css'
import Header from './Header';
import Explore from './Explor';
import {useState}from'react'
import FoodDisplay from './FoodDisply';
function Home() {
    const [category,set_category]=useState("All")
  return (
    <div>
        <Header/>
        <Explore category={category} set_category={set_category}/>
        <FoodDisplay category={category}/>
    </div>
  )
}
export default Home;