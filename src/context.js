import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Sandip Gautam',
        email: 'Sandip.Gautam@metropolia.fi',
        phone: '040-680-6830'
      },
      {
        id: 2,
        name: 'Jhon Doe',
        email: 'Jhone.Doe@metropolia.fi',
        phone: '555-555-5555'
      },
      {
        id: 3,
        name: 'Karen Williams',
        email: 'okKaren@gmail.com.fi',
        phone: '222-222-2222'
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
