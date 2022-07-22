import React from "react";
import Header from "../Header/Header";
import IcecreamMaker from "../IcecreamMaker/IcecreamMaker";
import UserContext from "../User/User";

const user = {
  name: "Lisa",
  email: "lsimpson@gmail.com",
};

function App() {
  return (
    <UserContext.Provider value={user}>
      <Header />
      <IcecreamMaker />
    </UserContext.Provider>
  );
}

export default App;
