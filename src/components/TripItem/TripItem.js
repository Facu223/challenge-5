import React, { useContext } from "react";
import PropTypes from "prop-types";
import UserContext from "../User/User";
import TripItemStyles from "./TripItem.module.css";
import TripButton from "../TripButton/TripButton";

const TripItem = ({ place }) => {
  const user = useContext(UserContext);
  const { email } = user;

  // Se renderiza el item completo
  return (
    <div className={TripItemStyles.wrapper}>
      <img src={place.image} alt={place.name} aria-label={place.name} />
      <h2>{place.name}</h2>
      <p>{place.description}</p>
      <h2 className={TripItemStyles.price}>{place.price}</h2>
      <TripButton toBuy={place.toBuy} place={place} email={email} />
    </div>
  );
};

TripItem.propTypes = {
  place: PropTypes.object.isRequired,
};

export default TripItem;
