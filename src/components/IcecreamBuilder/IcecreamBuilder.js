import React from "react";
import IcecreamItem from "../IcecreamItem/IcecreamItem";
import IcecreamBuilderStyles from "./IcecreamBuilder.module.css";

const places = [
  {
    id: 1,
    image: "images/cancun.png",
    name: "Cancún",
    description:
      "Cancún es una ciudad de México ubicada en la península de Yucatán que limita con el mar Caribe y que es conocida por sus playas, los numerosos centros turísticos y la vida nocturna.",
    price: 800,
    toBuy: "PROMO",
  },
  {
    id: 2,
    image: "images/miami.png",
    name: "Miami",
    description:
      "Miami es una ciudad internacional en el extremo sureste de Florida. La influencia cubana se refleja en los cafés y las tabaquerías de la Calle Ocho en la Pequeña Habana.",
    price: 800,
    toBuy: "RESERVAR",
  },
  {
    id: 3,
    image: "images/caribe.png",
    name: "Caribe",
    description:
      "El Caribe es una región de América que comprende el mar Caribe, sus costas circundantes y sus islas.​ La región se encuentra al sureste del Golfo de México y del continente norteamericano.",
    price: 800,
    toBuy: "COMPRAR",
  },
];

const IcecreamBuilder = () => {
  return (
    <div className={IcecreamBuilderStyles.wrapper}>
      {places.map((place, index) => (
        <IcecreamItem key={index} place={place} />
      ))}
    </div>
  );
};

export default IcecreamBuilder;
