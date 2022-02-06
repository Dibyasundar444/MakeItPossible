import React, { useState } from "react";
import { Button, Image, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Questions } from "../DummyData";
import Footer from "./myComponents/Footer";
import Header from "./myComponents/Header";
import St_Line from "./myComponents/St_Line";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // const search=()=>{
  //   console.log("ok");
  // };

  return (
    <div style={{ backgroundColor: darkMode ? "#000" : "#fff" }}>
      <Header
        title="MakeItPossible"
        darkMode={darkMode}
        setDarkMode={() => setDarkMode(!darkMode)}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        // search={search}
      />
      <div style={{ minHeight: "100vh" }}>
        <h3 className="text-center py-2" style={{ color: "#c96dfd" }}>
          Latest articles
        </h3>
        <div className="d-flex justify-content-center" style={{ marginTop: -20 }}>
          <St_Line
            Width="50%"
            Height={2}
            color={darkMode ? "#fff" : "#5442f5"}
          />
        </div>
        <div>
          {Questions.filter((val)=>{
            if(searchTerm===""){
              return val;
            }
            else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
              return val;
            }
          }).map((item) => {
            let ID = Number(item.id);
            let newID = ID + 1;
            return (
              <div className="d-flex py-2 px-2" key={item.id}>
                <div>
                  {/* <h4 style={{ color: "#f56ca0" }}>Q.{newID}</h4> */}
                  <div
                    style={{
                      height: 40,
                      width: 40,
                      borderRadius: 20,
                      backgroundColor: "gray",
                    }}
                  >
                    <OverlayTrigger
                      placement="right"
                      overlay={<Tooltip id="button-tooltip-2">User</Tooltip>}
                    >
                      {({ ref, ...triggerHandler }) => (
                        <img
                          {...triggerHandler}
                          ref={ref}
                          src={require("../assets/me.jpg")}
                          style={{ height: 40, width: 40, borderRadius: 20 }}
                        />
                      )}
                    </OverlayTrigger>
                  </div>
                </div>
                <div
                  style={{
                    maxWidth: "65%",
                    marginLeft: 20,
                    overflowWrap: "break-word",
                    backgroundColor: "#d6d4d0",
                    borderRadius: 5,
                  }}
                >
                  <h6 className="px-3 py-2">{item.title}</h6>
                </div>
                <div>
                <Button size="sm" variant="outline-info" style={{marginLeft:5,}}>Reply</Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer title="Copyright &copy; MakeItPossible" />
    </div>
  );
}
