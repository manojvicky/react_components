import React from "react";
import "../../styles/styles.css";

class Sidebar extends React.Component{
    state={
        open: false
    }
    handleClick = () =>{
        this.setState((prevState)=>{return {open : !prevState.open}});
    }
    render(){
        console.log("this.state", this.state);
        let style = this.state.open ? {width: "300px"}: {}
        return (
            <div className="sidebarWrapper" style={{...style}}>
                <div className="cross">
                    <button onClick={this.handleClick}>click</button>
                </div>
                <div className="content">
                    <ul>
                        <li>
                            Home
                    </li>
    
                        <li>
                            About
                    </li>
    
                        <li>
                            Contact
                    </li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Sidebar;