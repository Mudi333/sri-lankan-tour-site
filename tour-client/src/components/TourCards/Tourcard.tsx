import React from 'react'
import{Link} from 'react-router-dom'
import "./TourPlan.css";

   type TourcardProps ={
        title:string;
        description:string;
        tag: string;
        img1:string;
        img2:string;
        to:string;
    }


function Tourcard({title,description,tag,img1,img2,to}:TourcardProps) {
  return (
    
        <Link to={to} className="tour-card">
        <div className='tour-card-image-container'>
            <div className="tour-card-image-strip">
                <img src={img1} alt={title} />
                <img src={img2} alt={title} />
              
            </div>


        </div>
        <div className='tour-card-body'>
            <h3>{title}</h3>
            <p>{description}</p>
           <span className="tour-tag">{tag}</span>
        </div>
        </Link>   
  )
}

export default Tourcard