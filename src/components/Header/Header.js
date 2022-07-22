import React, { useContext } from "react";
import UserContext from "../User/User";
import HeaderStyles from "./Header.module.css";

const Header = () => {
  const user = useContext(UserContext);
  return (
    <div className={HeaderStyles.wrapper}>
      <p className={HeaderStyles.logo}>
        🛫 <span>Aerolineas Facu</span>
      </p>
      <p style={{ fontSize: "20px" }}>Bienvenida {user.name}</p>
    </div>
  );
};

export default Header;
