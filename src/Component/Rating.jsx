import React, { useState } from "react";
import Progressbar from "./Progress_bar";
import "./Rating.css";


export const Rating = () => {
    const [poor, setPoor] = useState(80);
  return (
     <div className="rating">
       <div className="review">
          <h2>Service Ratings & Reviews</h2>
          <h1>4.3 ⭐</h1>
          <div className="image-strong">
            <img style={{borderRadius:"50%"}} src="https://avatars.githubusercontent.com/u/104504771?s=50&v=4" />
             <b>Deepak Soni</b>
          </div>
          <p>MyGinee provides excellent cleaning services with professional and friendly staff. They offer competitive prices and are efficient, reliable, and flexible in meeting their clients' needs.</p>
       </div>

        <div className="progress_bar">
            
            <Progressbar bgcolor="orange"  progress={poor} height={25} />
            <Progressbar bgcolor="red"     progress="60" height={25} />
            <Progressbar bgcolor="#99ff66" progress="50" height={25} />
            <Progressbar bgcolor="#ff00ff" progress="75" height={25} />
            <Progressbar bgcolor="#99ccff" progress="100" height={25} />
        </div>
    </div>
  )
}
