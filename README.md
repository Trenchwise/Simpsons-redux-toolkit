Make a Redux Toolkit version of the Functional Simpsons project

Revisiting - Redux from video React Classes Redux

Redux

Does two things:

    - Holds the data
    - Holds the ability to manipulate the data

We call this the redux store.

You take all the state and put it a seperate box to the side, which is not part of the oneway data flow.

You also take the logic that manipulates the state and put it in a special box called the store

Each component has the ability to access/subscribe to the store which contains all the data. So no need to prop drill.

To use reduc you need to install redux and react redux

- npm i redux
- npm i react-redux

// This is the way of connecting to the store

import {connect} from "react-redux"

React redux - Is a way of allowing react to talk to reduct.

Then - the component needs to be wrapped in a special method called connect. You do this down in export.

// this lets the component interact with redux.

export default connect(mapStateToProps)(App);;

Then the below function needs to be declared.

// example from Russel's demo
function mapStateToProps() {
return { count: state.count} // here you return what state you want.
}

The job of the function is to tell the store, what you want from the store. Its like a shopping list - you explain what you want.

All the state now lives in the store. So each component only recieves props.

A component sends a message to the store teeling it manipulate the data. When you connect a component to the store it also gives you dispatch.

Dispatch - sends an objec. it has a type inside it.

class App extends Component {

add = () {
this.props.dispatch({type: "INCREMENT"})

}
}

export default App;

What this component does is it subcribes the data from the store and its able to send messages to the store to say that the data needs to be changed. This component doesn't hold state or logic. Its only job is to tell the store to change data and display data which it has extracted from the store.

test
