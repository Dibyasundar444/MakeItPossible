import React from "react";

export default function Footer(props) {
  const footer = {
    position: "absolute",
    width: "100%",
    // bottom: 0
  };
  return (
    <footer className="bg-dark text-center text-white py-3" style={footer}>
      <h6>{props.title}</h6>
    </footer>
  );
}
