import React from "react";
import ReactDOM from "react-dom";
import Demo1 from "./src/components/demo1/demo1";

function App (){
    return (
      <div className="app">
          <Demo1 str="Manoj"/>
      </div>
    );
}


ReactDOM.render(
    <App />, document.getElementById('app')
);