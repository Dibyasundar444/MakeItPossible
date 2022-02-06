import React from "react";
import Toggle from "./Toggle";

export default function Header(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg ${
        props.darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="/docs/5.1/assets/brand/bootstrap-logo.svg"
            alt="logo"
            width="30"
            height="24"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/login">
                <div
                  style={{
                    borderRadius: 10,
                    padding: 5,
                    maxWidth: "200px",
                    boxShadow: `1px 3px 1px ${
                      props.darkMode ? "#c96dfd" : "#9E9E9E"
                    }`,
                  }}
                  className="d-flex align-items-start"
                >
                  {/* <div style={{ height: 30, width: 30, borderRadius: 15,backgroundColor:"gray"}}> */}
                    <img
                      src={require("../../assets/user.png")}
                      style={{ height: 20, width: 20, borderRadius: 10 }}
                    />
                  {/* </div> */}
                  <h6 className="px-2">user</h6>
                </div>
              </a>
            </li>
          </ul>
          <div className="d-flex">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="search questions..."
                aria-label="Search"
                value={props.searchTerm}
                onChange={(e) => props.setSearchTerm(e.target.value)}
              />
              {/* <button className="btn btn-outline-success" type="submit">
                Search
              </button> */}
            </form>
            <div className="d-flex">
              <Toggle
                darkMode={props.darkMode}
                setDarkMode={props.setDarkMode}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
