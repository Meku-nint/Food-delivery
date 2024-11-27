import React from 'react'
import './fooditem.css'
import {useState}from 'react'
import { Context } from './Context'
import { useContext } from 'react'
import {assets} from './admin/assets'
const FoodItem = ({id,name,price,description,image}) =>
    {
      const {cartitems,addtocart,removefromcart}=useContext(Context);
      return(
        <div className="food-item">
          <div className='food-item-img'>
            <img className='food-item-image-container' src={image}alt=""/>
            {
              !cartitems[id]
              ?<img className='add'onClick={()=>addtocart(id)} src={assets.add_icon_white}alt=""/>
              :<div className='food-item-counter'>
                <img onClick={()=>removefromcart(id)} src={assets.remove_icon_red}/>
                <p>{cartitems[id]}</p>
              <img onClick={()=>addtocart(id)} src={assets.add_icon_green}/>
              </div>
            }
          </div>
          <div className="food-item-info">
            <div className="food-item-name-rating">
              <p>{name}</p>
              <img src={assets.rating_starts}alt=""/>
            </div>
            <p className='food-item-description'>{description}</p>
            <p className='food-item-price'>&{price}</p>
          </div>

        </div>
      )
    }
export default FoodItem;