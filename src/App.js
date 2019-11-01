import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

// This is a functional programing example.
// const app = props => {
//
//     const [ personsState, setPersonsState ] = useState({
//         persons: [
//             { name: 'Name1', age: 28 },
//             { name: 'Name2', age: 29 },
//             { name: 'Name3', age: 30 }
//         ]
//     });
//
//     const [otherState, setOtherState] = useState('some other value');
//
//     const switchNameHandler = () => {
//         setPersonsState({
//             persons: [
//                 { name: 'NameChange', age: 28 },
//                 { name: 'Name2', age: 29 },
//                 { name: 'Name3', age: 30 }
//             ]
//         });
//     };
//
//     return (
//         <div className="App">
//             <h1>I'm a React App!</h1>
//             <p>This is really working</p>
//             <button onClick={switchNameHandler}>Switch Name</button>
//             <Person name={ personsState.persons[0].name } age={28}>This is a children</Person>
//         </div>
//     );
// };
//
// export default app;

class App extends Component {
    state = {
        persons: [
            { name: 'Name1', age: 28 },
            { name: 'Name2', age: 29 },
            { name: 'Name3', age: 26 }
        ],
        otherState: 'some other value'
    };

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                { name: newName, age: 28 },
                { name: 'Name2', age: 29 },
                { name: 'Name3', age: 27 }
            ]
        });
    };

    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button onClick={() => this.switchNameHandler('New name')}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, 'Change in child')}
                >
                    Passing from children!
                </Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                />
            </div>
        );
    }
}

export default App;

