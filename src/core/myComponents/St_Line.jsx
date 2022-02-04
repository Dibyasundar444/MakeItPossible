import React from "react";

export default function St_Line({ color, Width, Height }) {
  return (
    <hr
      style={{
        width: Width,
        backgroundColor: color,
        height: Height,
      }}
    />
  );
}
