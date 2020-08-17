import React, {useEffect} from "react";

const Cockpit = (props) => {

    useEffect(() => {
        console.log('Cockpit.js : useEffects');
        // Http Request ...
        setTimeout(() => {
            alert('Saved Data to Cloud');
        }, 1000);

        // this will work similar - componentWillUnmount
        // you can perform clean up here
        return () => {
            console.log('Clean up of cockpit')
        };

    }, []);

    // you can add multiple useEffect function
    useEffect(() => {
        console.log('Cockpit.js : useEffects ***** 2nd *****');
        return () => {
            console.log('Clean up of ***** 2nd ***** cockpit')
        };
    });

    const btnStyleGreen = {
        'color': '#fff',
        'backgroundColor': '#28a745',
        'borderColor': '#28a745',
    }
    return (
        <div>
            <h1>{props.title}</h1>
            <p>This is actually working !!</p>
            <button style={ btnStyleGreen } className="btn mb-3"
                    onClick={props.clicked}>Toggle</button>
        </div>
    );
};

export default Cockpit;
