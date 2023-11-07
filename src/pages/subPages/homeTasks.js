import React from "react";
import Maskgroup from "../../image/Maskgroup.jpg"
import Eventsecond from "../../Icons/Eventsecond";
import event2 from"../../image/event2.jpg"
import event3 from"../../image/event3.jpg"

function HometaskSecond(props) {
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
              left: 0,
              background:"none"
            }}
          >
            <img src={Maskgroup} height={"500px"}></img>
          </div>
      
         
          <div style={{background:"pink",width:"465px",height:"363px", top:100, marginLeft:800}}>
          <span style={{fontSize:"60px",color:"black"}}>Your Hub for team work</span>
          <span style={{fontSize:"15px",color:"black"}}>Give everyone you work with- inside and outside your company-a more prodactive way to stay in sync Responst faster with emoji, keep, conversation focused in channels, and simplify all your communication into one place</span>
          </div>
          <div
          style={{
            position: "absolute",
            top: 180,
            left: 250,
            background:"none"
          }}
        >
          <img src={event2} height={"100px"}></img>
        </div>
        <div
        style={{
          position: "absolute",
          top: 300,
          left: 250,
          background:"none"
        }}
      >
        <img src={event3} height={"100px"}></img>
      </div>
        </div>
    
    
  );
}

export default HometaskSecond