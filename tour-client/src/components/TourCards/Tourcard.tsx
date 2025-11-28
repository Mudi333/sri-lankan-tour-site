import React from 'react'
import{Link} from 'react-router-dom'
import style from "./TourPlan.module.css";

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
    <Link to={to} className={style.tour_card}>
        <div className={style.tour_card_image_container}>
            <div className={style.tour_card_image_strip}>
                <img src={img1} alt={title} />
                <img src={img2} alt={title} />
              
            </div>


        </div>
        <div className={style.tour_card_body}>
            <h3>{title}</h3>
            <p>{description}</p>
           <span className={style.tour_tag}>{tag}</span>
        </div>
        </Link>   
  )
}

export default Tourcard