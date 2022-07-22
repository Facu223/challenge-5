import React, { useContext } from "react";
import { IcecreamContext } from "../IcecreamMaker/IcecreamMaker";
import IcecreamSummaryStyles from "./IcecreamSummary.module.css";

const IcecreamSummary = () => {
  const { icecreams } = useContext(IcecreamContext);
  return (
    <div className={IcecreamSummaryStyles.wrapper}>
      <h2>Tu pedido: </h2>
      <ul className={IcecreamSummaryStyles.list}>
        {icecreams.map((place, index) => {
          return place.toBuy !== "RESERVAR" ? (
            <li key={index}>Viaje a {place.name}</li>
          ) : null;
        })}
      </ul>
    </div>
  );
};

export default IcecreamSummary;
