import React, {useContext} from 'react'
import { Context } from './Context';
import './foodDisplay.css'
import FoodItem from './FoodItem';
const FoodDisplay = ({category}) => {
    const {food_list}=useContext(Context)
  return (
    <div className='food-display'id="food-display">
    <h2>Top dishes near you🍅</h2>
    <div className="food-display-list">
    
            {food_list.map((item,index)=>{
              if(category==="All" || item.category===category){
                return <FoodItem 
                key={index}
                id={item._id} 
                name={item.name}
                description={item.description}
                 price={item.price} 
                  image={item.image}/>
              }
                
            })
        }
    </div>
    </div>
  )
}

export default FoodDisplay;