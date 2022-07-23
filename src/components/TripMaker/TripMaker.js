import React, {
  useReducer,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import TripBuilder from "../TripBuilder/TripBuilder";
import TripSummary from "../TripSummary/TripSummay";
import TripButton from "../TripButton/TripButton";
import TripMakerStyles from "./TripMaker.module.css";
import UserContext from "../User/User";
export const TripContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    // En caso de comprar, buttonVisible psa a ser true, y se agrega al carro
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
      // Se elimina el ultimo elemento agregado al carro por el usuario. (Menos las promos)
      const lastElement = state[state.length - 1];
      // Si las lastElement existe, se procede a preguntar a que tipo pertenece el item (PROMO, COMPRAR, ETC)
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
          alert(`Mail de cancelación de reserva enviado a ${action.email}`);
          return newState;
        }
      }
      return state;
      // En caso de reserva, solo se envia un mail. Se agrega al carro, pero no lo renderiza
    case "RESERVAR":
      action.setButtonVisible(true);
      console.log(`Mail de reserva enviado a ${action.email}`);
      alert(`Mail de reserva enviado a ${action.email}`);
      return [...state, action.place];
    default:
      return state;
  }
}

// 
const TripMaker = () => {
  const user = useContext(UserContext);
  const { email } = user;
  const [trips, setTrip] = useReducer(reducer, []);
  const [buttonVisible, setButtonVisible] = useState(true);
  // Se declaran las diferentes promociones
  const promo_1 = "¡¡Viaje a cancun con un 10% de descuento comprando YA!!";
  const promo_2 = "¡¡Últimos lugares a Miami, Reserve hoy!!";
  const promo_3 = "¡Solo 10 lugares disponibles al Caribe!";
  const promo_4 =
    "6 cuotas sin interés dentro de los próximos minutos ¡Reserve YA!";
  const promos = [promo_1, promo_2, promo_3, promo_4];
  const [randomPhrase, setRandomPhrase] = useState();

  useEffect(() => {
    // Cada vez que se actualice user, se setea una nueva frase aleatoria (F5 para ver las diferentes frases)
    setRandomPhrase(Math.floor(Math.random() * promos.length));
  }, [user]);

  // En caso de que buttonVisible sea true, se habilita el boton para elimiar.
  // En caso de que sea false, simplemente muestra un boton sin funcionalidad para aclarar al usuario que no puede eliminar mas viajes
  return (
    <TripContext.Provider
      value={{ trips, setTrip, setButtonVisible, buttonVisible }}
    >
      <div className={TripMakerStyles.promo}>{promos[randomPhrase]}</div>
      <div className={TripMakerStyles.wrapper}>
        {buttonVisible === true ? (
          <TripButton toBuy="CANCELAR" email={email} />
        ) : (
          <button className={TripMakerStyles.button_info}>
            YA NO PUEDES CANCELAR MAS NADA DEL CARRO, A MENOS QUE SIGAS
            AGREGANDO VIAJES
          </button>
        )}
      </div>
      <TripBuilder />
      <TripSummary />
    </TripContext.Provider>
  );
};

export default TripMaker;
