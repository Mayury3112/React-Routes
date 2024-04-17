import React from "react";

export default function Nav(props) {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            React hotel menu
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a
                  className="nav-link"
                  href="#"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  React Menu
                </a>
              </li>

              <li className="nav-item active ml-5 p-2 text-light"  style={{backgroundColor : "green",borderRadius : "10px"}}>
           
                  {props.totalOrder.length}
               
              </li>
          
            </ul>
          </div>
        </nav>


      </div>
    </>
  );
}
