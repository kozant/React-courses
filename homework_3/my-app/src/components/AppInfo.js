import React from "react";

export default function AppInfo() {
    const divStyle = {
        color: 'gray',
        textAlign: 'right'
    };

    return (
        <div className="col-6" style={divStyle}>
            <span className="todo">4 </span>
            <span>more to do, </span>
            <span className="done">0 </span>
            <span>done</span>
        </div>
    );
};
