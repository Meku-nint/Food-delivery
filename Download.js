import React from 'react'
import './download.css'
import { assets } from './admin/assets'
const Download = () => {
  return (
    <div className='download'id='download'>
        <p>Download the app</p>
    <div className='download-icons'>
    <img src={assets.play_store} alt=''/>
        <img src={assets.app_store} alt=''/>
    </div>
    </div>
  )
}
export default Download;