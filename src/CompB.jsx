import React, { useContext } from "react";
import { Firstname, Lastname } from "./App";
const CompB = () => {
  const fname = useContext(Firstname);
  const lname = useContext(Lastname);
  return (
    <h1>
      My name is {fname} {lname}
    </h1>
    // <Firstname.Consumer>
    //   {(fname) => {
    //     return (
    //       <Lastname.Consumer>
    //         {(lname) => {
    //           return (
    //             <h1>
    //               My name is {fname} {lname}{" "}
    //             </h1>
    //           );
    //         }}
    //       </Lastname.Consumer>
    //     );
    //   }}
    // </Firstname.Consumer>
  );
};
export default CompB;
