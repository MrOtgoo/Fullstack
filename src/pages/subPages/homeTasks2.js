import React from 'react'
import Brooke from "../../image/Brooke.png"
import Group from "../../image/Group 18.png"

export const HomeTasks2 = () => {
  return (
    <div
          style={{
            width: "100vw",
            height:"100vh",
            display: "flex",
            position: "relative",
            justifyContent: "space-between",
            background:"#F5F7FA",
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between",
        
            
            
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 100,
              right: 0,
              background:"none"
            }}
          >
            <img src={Brooke} height={"500px"}></img>
          </div>
      
         
          <div style={{background:"transparent",width:"465px",height:"363px", top:100, Right:200}}>
          <span style={{fontSize:"60px",color:"black"}}>Your Hub for team work</span>
          <span style={{fontSize:"15px",color:"black"}}>Give everyone you work with- inside and outside your company-a more prodactive way to stay in sync Responst faster with emoji, keep, conversation focused in channels, and simplify all your communication into one place</span>
          </div>
          <div
          style={{
            position: "absolute",
            top: 180,
            right: 240,
            background:"none"
          }}
        >
          <img src={Group} height={"250px"}></img>
        </div>
        </div>
    
  )
}

export default HomeTasks2