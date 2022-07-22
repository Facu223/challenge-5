import React, { useContext } from "react";
import PropTypes from "prop-types";
import UserContext from "../User/User";
import IcecreamItemStyles from "./IcecreamItem.module.css";
import TripButton from "../TripButton/TripButton";

const IcecreamItem = ({ place }) => {
  const user = useContext(UserContext);
  const { email } = user;

  return (
    <div className={IcecreamItemStyles.wrapper}>
      <img src={place.image} alt={place.name} aria-label={place.name} />
      <h2>{place.name}</h2>
      <p>{place.description}</p>
      <h2 className={IcecreamItemStyles.price}>{place.price}</h2>
      <TripButton toBuy={place.toBuy} place={place} email={email} />
    </div>
  );
};

IcecreamItem.propTypes = {
  place: PropTypes.object.isRequired,
};

export default IcecreamItem;
