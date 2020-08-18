import React, {useContext, useEffect, useRef} from "react";
import AuthContext from "../../Context/auth-context";

const Cockpit = (props) => {

    const authContext = useContext(AuthContext);
    console.log('authContext: ', authContext.authenticated);
    const toggleBtnRef = useRef(null);

    useEffect(() => {
        console.log('****** calling click ******');
        toggleBtnRef.current.click();
    }, []);

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
            {/*<AuthContext.Consumer>*/}
            {/*    {(context) => {*/}
            {/*        return  <button onClick={context.login}*/}
            {/*                        className={'mx-auto my-3 btn btn-secondary'}>Login</button>*/}

            {/*    }}*/}
            {/*</AuthContext.Consumer>*/}
            <button onClick={authContext.login}
                    className={'mx-auto my-3 btn btn-secondary'}>Login</button>
            <br/>
            <button style={btnStyleGreen}
                    className="btn mb-3"
                    ref={toggleBtnRef}
                    onClick={props.clicked}>Toggle</button>
            {alertLabel}
        </div>
    );
};

export default React.memo(Cockpit);
// export default Cockpit;
