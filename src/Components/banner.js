import React from 'react'
import "../Components/banner.css"
import bannerImage from "../recources/BannerPurple.png"

const banner = () => {
  return (
    <div className="banner">
          <div className="bannerImage">
            <img src={bannerImage}></img>
          </div>
          <div className="bannerTitle">
            <p>
             Travel In Luxury...
            </p>
            <button className='bannerBtn'>Discover Now</button>
          </div>
        </div>
  )
}

export default banner