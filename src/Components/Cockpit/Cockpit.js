import React, {useEffect} from "react";

const Cockpit = (props) => {

    useEffect(() => {
        console.log('Cockpit.js : useEffects');
        // Http Request ...
        setTimeout(() => {
            alert('Saved Data to Cloud');
        }, 1000);
    }, []); // empty array means run only once, why? elements of arrays are the dependencies, no dependencies means no need to run again, so it will execute only once when initiated
    // }, [props.persons]); this means execute useEffect when props.persons changes

    // whatever style written here inside is scoped to the component, it is NOT GLOBAL.
    // restriction are there, like you can not add :hover lie pseudo class
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
