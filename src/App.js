import React, { useState } from 'react';
import './App.css';
// word after import can be anything, but best practice is using component name starting with capital character
// any tag starts with lowercase is used for built in tags like <div>, <h1>
// so custom component tag start with capital letter is best practice
// and can be easily differentiated
import Person from "./Person/Person";

const App = () => {

    // useState always returns array with just 2 elements, always
    // first element is current state
    // second element is function, this function is used to change or update the state later when needed
    const [ personState, setPersonState ] = useState(
        {
            persons: [
                {
                    name: 'Dhwani',
                    age: 29
                },
                {
                    name: 'Vaidehi',
                    age: 25
                },
                {
                    name: 'Saloni',
                    age: 24
                }
            ],
        }
    );

    //: multiple
    const [otherState, setOtherState] = useState({otherStateProp: "I just like persons prop",});

    // when you log in console, you'll see that `otherStateProp` is missing after clicking Switch
    // that means you have to manager other props of the state manually
    console.log('personState: ', personState);
    console.log('otherState: ', otherState);

    const switchNameHandler = () => {
        console.log('was clicked');
        // DON'T DO THIS - this.state.persons[0].name = 'AVANTIKA';

        // setPersonState({
        //     persons: [
        //         {
        //             name: 'Dhwani Joshi',
        //             age: 29
        //         },
        //         {
        //             name: 'Vaidehi',
        //             age: 25
        //         },
        //         {
        //             name: 'Saloni',
        //             age: 20
        //         }
        //     ],
        //     otherStateProp: "I just like persons prop", // this can be done but not suggested one
        // });
        // more elegant way is to call useState multiple time, check label :multiple

        setPersonState({
            persons: [
                {
                    name: 'Dhwani Joshi',
                    age: 29
                },
                {
                    name: 'Vaidehi',
                    age: 25
                },
                {
                    name: 'Saloni',
                    age: 20
                }
            ],
        });
    }


    return (
        <div className="App">
            <h1>Hi, I am REACT App</h1>
            <p>This is actually working !!</p>
            <button className="btn btn-primary mb-3" onClick={switchNameHandler}>Switch Names</button>
            {/*this adding round bracket will call the function immediately, so do not use round bracket, just assign the handler*/}
            {/*<button className="btn btn-primary" onClick={this.switchNameHandler()}>Switch Names</button>*/}
            <Person name={ personState.persons[0].name } age={ personState.persons[0].age } ></Person>
            <Person name={ personState.persons[1].name } age={ personState.persons[1].age } >Dancing and painting</Person>
            <Person name={ personState.persons[2].name } age={ personState.persons[2].age } ></Person>
        </div>
    );

}

export default App;

