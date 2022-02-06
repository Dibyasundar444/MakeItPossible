import React from "react";

export default function Footer(props) {
  // const footer = {
  //   position: "absolute",
  //   right: 0,
  //   left: 0,  
  // };
  return (
    <footer className="bg-dark text-center text-white py-3">
      <h6>{props.title}</h6>
    </footer>
  );
}
