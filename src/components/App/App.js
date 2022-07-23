import React from "react";
import Header from "../Header/Header";
import TripMaker from '../TripMaker/TripMaker'
import UserContext from "../User/User";

const user = {
  name: "Lisa",
  email: "lsimpson@gmail.com",
};

function App() {
  return (
    <UserContext.Provider value={user}>
      <Header />
      <TripMaker />
    </UserContext.Provider>
  );
}

export default App;
