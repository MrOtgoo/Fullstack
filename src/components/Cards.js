import React from "react";
import StarIcon from "../Icons/starIcon";

const converNumberToArray = (number)=>{
    const result = [];

for(let i=0; i<= number -1; i++){
    result.push(i);
}
return result;
};

function Card(props){
    const { Card } = props;
    const{stars,text,image,name,}= Card;

    return(
        <div
        style={{
          minWidth:"366px",
          backgroundColor:"white",
          paddingTop:"30px",
          paddingLeft:"30px",
          paddingRight:"42px",
          height:"374px",
          border:"2px solid red",
      
        }}>
          <div style={{
              paddingBottom:"20px"
          }}>
          {converNumberToArray(stars).map((num)=>{
              return <StarIcon key={num}/>
          })}
          </div>
       <div style={{paddingBottom:"50px"}}>{text}</div>
       <div style={{display:"flex",alignItems:"center"}}>
       <img width="56px" height="56px" src={image} alt=""/>
       <span style={{paddingLeft:"20px"}}>{name}</span></div>
          </div>
    )

}
export default Card