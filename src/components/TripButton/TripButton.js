import { useContext } from "react";
import { TripContext } from "../TripMaker/TripMaker";
import TripButtonStyles from "./TripButton.module.css";

const TripButton = ({ toBuy, place, email }) => {
  const { setButtonVisible, setTrip } = useContext(TripContext);

  // En onClick, se llama a setTrip, de acuerdo a si el item es RESERVAR, COMPRAR, PROMO o CANCELAR
  return (
    <button
      className={
        toBuy === "CANCELAR"
          ? TripButtonStyles.button_delete_style
          : TripButtonStyles.button_style
      }
      onClick={() => {
        if (toBuy === "RESERVAR") {
          setTrip({ place, email, type: "RESERVAR", setButtonVisible });
        } else if (toBuy === "COMPRAR") {
          setTrip({ place, type: "COMPRAR", setButtonVisible });
        } else if (toBuy === "PROMO") {
          setTrip({ place, type: "PROMO" });
        } else {
          setTrip({ type: "CANCELAR", email, setButtonVisible });
        }
      }}
    >
      {toBuy}
    </button>
  );
};

export default TripButton;
