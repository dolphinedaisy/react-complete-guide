import React from "react";

const Cockpit = (props) => {
    // whatever style written here inside is scoped to the component, it is NOT GLOBAL.
    // restriction are there, like you can not add :hover lie pseudo class
    const btnStyleGreen = {
        'color': '#fff',
        'backgroundColor': '#28a745',
        'borderColor': '#28a745',
    }
    return (
        <div>
            <h1>Hi, I am REACT App</h1>
            <p>This is actually working !!</p>
            <button style={ btnStyleGreen } className="btn mb-3"
                    onClick={props.clicked}>Toggle</button>
        </div>
    );
};

export default Cockpit;
