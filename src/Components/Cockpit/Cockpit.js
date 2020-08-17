import React from "react";

const Cockpit = (props) => {

    const btnStyleGreen = {
        'color': '#fff',
        'backgroundColor': '#28a745',
        'borderColor': '#28a745',
    }

    let alertLabel = null;

    if(props.personsLength <= 2) {
        alertLabel = <p>Less persons are there !!</p>
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <p>This is actually working !!</p>
            <button style={ btnStyleGreen } className="btn mb-3"
                    onClick={props.clicked}>Toggle</button>
            {alertLabel}
        </div>
    );
};

export default React.memo(Cockpit);
// export default Cockpit;
