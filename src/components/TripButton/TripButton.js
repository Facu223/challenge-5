import { useContext } from "react";
import { IcecreamContext } from "../IcecreamMaker/IcecreamMaker";
import TripButtonStyles from "./TripButton.module.css";

const TripButton = ({ toBuy, place, email }) => {
  const { setButtonVisible, setIcecream } = useContext(IcecreamContext);

  return (
    <button
      className={
        toBuy === "CANCELAR"
          ? TripButtonStyles.button_delete_style
          : TripButtonStyles.button_style
      }
      onClick={() => {
        if (toBuy === "RESERVAR") {
          setIcecream({ place, email, type: "RESERVAR", setButtonVisible });
        } else if (toBuy === "COMPRAR") {
          setIcecream({ place, type: "COMPRAR", setButtonVisible });
        } else if (toBuy === "PROMO") {
          setIcecream({ place, type: "PROMO" });
        } else {
          setIcecream({ type: "CANCELAR", email, setButtonVisible });
        }
      }}
    >
      {toBuy}
    </button>
  );
};

export default TripButton;
