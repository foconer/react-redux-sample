Props 
- Is short for Properties
- Allows to pass data from parent to child component
- Data is passed as an HTML attribute
- Are immutable

State
- Is mutable using setState in class component
- Is local to the component

Redux
- Use to manage global state container that responds to actions.
- Action, Reducers

Install Redux: 
- npm install redux react-redux
- updates package.json -> dependencies

creata a store in index.js
- import { createStore } from 'redux'
- import { Provider } from 'react-redux'

create Action and Reducer
create mapStateToProps and mapDispatcherToProps