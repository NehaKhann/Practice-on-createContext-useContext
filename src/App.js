import React, { createContext } from "react";
import CompA from "./CompA";
import "./styles.css";

const Firstname = createContext();
const Lastname = createContext();

export default function App() {
  return (
    <div className="App">
      <Firstname.Provider value={"Neha"}>
        <Lastname.Provider value={"Khan"}>
          <CompA />
        </Lastname.Provider>
      </Firstname.Provider>
    </div>
  );
}
export { Firstname, Lastname };
