import React, { useReducer, createContext, useContext, useState } from "react";
import IcecreamBuilder from "../IcecreamBuilder/IcecreamBuilder";
import IcecreamSummary from "../IcecreamSummary/IcecreamSummary";
import TripButton from "../TripButton/TripButton";
import IcecreamMakerStyles from "./IcecreamMaker.module.css";
import UserContext from "../User/User";
export const IcecreamContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "COMPRAR":
      action.setButtonVisible(true);
      return [...state, action.place];
    case "PROMO":
      const response = window.confirm(
        "Luego de comprar una promo, no se puede cancelar. ¿Seguro/a que desea adquirirla?"
      );
      if (response) {
        return [...state, action.place];
      }
      return state;
    case "CANCELAR":
      const lastElement = state[state.length - 1];
      if (lastElement) {
        if (lastElement.toBuy === "PROMO") {
          console.log("No puedes cancelar una promo una vez adquirida");
        }
        if (lastElement.toBuy === "COMPRAR") {
          action.setButtonVisible(false);
          const newState = [...state];
          newState.pop();
          console.log("Compra cancelada");
          return newState;
        }
        if (lastElement.toBuy === "RESERVAR") {
          action.setButtonVisible(false);
          const newState = [...state];
          newState.pop();
          console.log(
            `Mail de cancelación de reserva enviado a ${action.email}`
          );
          return newState;
        }
      }
      return state;
    case "RESERVAR":
      action.setButtonVisible(true);
      console.log(`Mail de reserva enviado a ${action.email}`);
      return [...state, action.place];
    default:
      return state;
  }
}

const IcecreamMaker = () => {
  const user = useContext(UserContext);
  const { email } = user;
  const [icecreams, setIcecream] = useReducer(reducer, []);
  const [buttonVisible, setButtonVisible] = useState(true);
  return (
    <IcecreamContext.Provider
      value={{ icecreams, setIcecream, setButtonVisible, buttonVisible }}
    >
      <div className={IcecreamMakerStyles.wrapper}>
        {buttonVisible === true ? (
          <TripButton toBuy="CANCELAR" email={email} />
        ) : (
          <button className={IcecreamMakerStyles.button_info}>
            YA NO PUEDES CANCELAR MAS NADA DEL CARRO, A MENOS QUE SIGAS
            AGREGANDO VIAJES
          </button>
        )}
      </div>
      <IcecreamBuilder />
      <IcecreamSummary />
    </IcecreamContext.Provider>
  );
};

export default IcecreamMaker;
