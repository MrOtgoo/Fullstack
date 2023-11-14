import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Icons/logo";
import DarkLogo from "../Icons/DarkLogo";


const Header = (props) => {
  const { darkTheme, user } = props;

  const navigate = useNavigate();

  const handleHomePage = () => {
    navigate("/");
  };

  const handleProductsPage = () => {
    navigate("/products");
  };

  const handleContactPage = () => {
    navigate("/contact");
  };

  const handleProfilePage = () => {
    navigate("/ProfilePage");
  };

  const handleServicesPage = () => {
    navigate("/ServicesPage");
  };

  const navbarItems = [
    { name: "Blogs", onclick: handleProductsPage },
    { name: "Message", onclick: handleServicesPage }, 
    { name: "Contact", onclick: handleContactPage },
    { name: "Quiz", onclick: handleProfilePage },
  ];

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "transparent",
        display: "flex",
        justifyContent: "center",
        height: "50px",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "1080px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          {darkTheme ? (
            <DarkLogo onClick={handleHomePage} style={{ cursor: "pointer" }} />
          ) : (
            <Logo onClick={handleHomePage} style={{ cursor: "pointer" }} />
          )}
        </div>
        {user ? (
          <div style={{ width: "40%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            {navbarItems.map((item) => (
              <span
                key={item.name}
                style={{
                  cursor: "pointer",
                  color: darkTheme ? "black" : "#FFFFFF",
                }}
                onClick={item.onclick}
              >
                {item.name}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;

