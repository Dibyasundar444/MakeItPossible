import React, { useState } from "react";
import { Questions } from "../DummyData";
import Footer from "./myComponents/Footer";
import Header from "./myComponents/Header";
import St_Line from "./myComponents/St_Line";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div style={{ backgroundColor: darkMode ? "#000" : "#fff" }}>
      <Header
        title="MakeItPossible"
        darkMode={darkMode}
        setDarkMode={() => setDarkMode(!darkMode)}
      />
      <h3 className="text-center py-2" style={{ color: "#c96dfd" }}>
        Latest articles
      </h3>
      <div class="d-flex justify-content-center" style={{ marginTop: -20 }}>
        <St_Line Width="50%" Height={2} color={darkMode ? "#fff" : "#5442f5"} />
      </div>
      <div>
        {Questions.map((item) => {
          let ID = Number(item.id);
          let newID = ID + 1;
          return (
            <div className="d-flex py-2 px-2" key={item.id}>
              <h4 style={{ color: "#f56ca0" }}>Q.{newID}</h4>
              <div
                style={{
                  maxWidth: "70%",
                  marginLeft: 20,
                  overflowWrap: "break-word",
                  backgroundColor: "#d6d4d0",
                  borderRadius: 5,
                }}
              >
                <h5 className="px-3 py-2">{item.title}</h5>
              </div>
              <div
                className="mx-2"
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 20,
                  backgroundColor: "gray",
                }}
              >
                <img
                  src={require("../assets/me.jpg")}
                  alt="img"
                  style={{ height: 40, width: 40, borderRadius: 20 }}
                />
              </div>
              {/* <p style={{ color: darkMode ? "#fff" : "#000" }}>user</p> */}
            </div>
          );
        })}
      </div>
      <Footer title="Copyright &copy; MakeItPossible" />
    </div>
  );
}
