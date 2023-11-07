import React from "react";
import Header from "../components/Header";

function ProfilePage(props) { 
    return (
        <div style={{ backgroundColor: "#F5F6A", backgroundSize: "cover", width: "100%", height: "100vh" }}>
            <Header user={props.user} darkTheme={true} />
        </div>
    );
}

export default ProfilePage;
