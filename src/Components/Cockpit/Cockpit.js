import React, {useEffect} from "react";

const Cockpit = (props) => {

    console.log('***************** Rendering Cockpit.js *****************');

    useEffect(() => {
        console.log('Cockpit.js : useEffects');
        // Http Request ...
        const timer = setTimeout(() => {
            alert('Saved Data to Cloud');
        }, 2000);

        // this will work similar - componentWillUnmount
        // you can perform clean up here
        return () => {
            clearTimeout(timer);
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
