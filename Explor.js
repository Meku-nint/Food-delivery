import React from 'react'
import './explore.css'
import { menu_list } from './admin/assets'
const Explore = ({category,set_category}) => {
  return (
    <div className='explore-menu'id="explore-menu">
        <h1>Explore Menu</h1>
        <p className='explore-menu-text'>Choose from the diverse menu featuring a delectable array of the dishes</p>
        <div className='explore-menu-list'>
         {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>set_category(prev=>prev===item.menu_name?"All":item.menu_name)} key ={index} className='explore-menu-item'>
                <img className ={category===item.menu_name?"active":""} src={item.menu_image} alt=''/>
                <p>{item.menu_name}</p>
                </div> 
            )
      } )}
    </div>
    <hr/>
    </div>
  )
}
export default Explore