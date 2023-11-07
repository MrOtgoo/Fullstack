import React from "react";
import MeetingCalendar from "../../Icons/calendar";
import MeetingJpg from "../../image/Meeting.jpg";
import event1 from "../../image/event1.png";

function HomeTeamwork(props) {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        position: "relative",
        justifyContent: "space-between",
        background: "#F5F7FA",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ position: "absolute", top: 100, right: 0, background: "red" }}>
        <img src={MeetingJpg} height={"500px"} alt="Meeting" />
      </div>
      <div style={{ position: "absolute", top: 40, right: 30 }}>
        <MeetingCalendar />
      </div>
      <div style={{ background: "pink", width: "465px", height: "363px", marginRight:250, top:100 }}>
        <span style={{ fontSize: "60px", color: "black" }}>Your Hub for Team Work</span>
        <span style={{ fontSize: "15px", color: "black" }}>
          Give everyone you work with - inside and outside your company - a more productive way to stay in sync. Respond faster with emojis, keep conversations focused in channels, and simplify all your communication into one place.
        </span>
      </div>
      <div style={{ position: "absolute", top: 200, right: 300, background: "none" }}>
        <img src={event1} height={"100px"} alt="Event" />
      </div>
    </div>
  );
}

export default HomeTeamwork;
