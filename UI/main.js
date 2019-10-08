import React from "react";
import ReactDOM from "react-dom";
import Sidebar from "./src/components/Sidebar/Sidebar";
import "./src/styles/styles.css"

function App (){
    return (
      <div className="app">
          <div className="main">
              <Sidebar/>
              <div className="restContent">
                  rest of the screen
              </div>
          </div>
      </div>
    );
}


ReactDOM.render(
    <App />, document.getElementById('app')
);