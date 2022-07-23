import React, { useContext } from "react";
import { TripContext } from "../TripMaker/TripMaker";
import TripSummary from "./TripSummary.module.css";

// Si toBuy es diferente a RESERVAR, se renderiza, si no, no.
const IcecreamSummary = () => {
  const { trips } = useContext(TripContext);
  return (
    <div className={TripSummary.wrapper}>
      <h2>Tu pedido: </h2>
      <ul className={TripSummary.list}>
        {trips.map((place, index) => {
          return place.toBuy !== "RESERVAR" ? (
            <li key={index}>Viaje a {place.name}</li>
          ) : null;
        })}
      </ul>
    </div>
  );
};

export default IcecreamSummary;
