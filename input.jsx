import React from 'react';
import fs from 'fs';
import readline from 'readline';

export default class Input extends React.Component {
  constructor() {
    console.log('class initialised');
    super();

    this.state = {
      list: [],
    };
  }

  append() {
    console.log('append item');
    this.setState(prevState => ({
      list: prevState.append('hello'),
    }));
  }

  render() {
    console.log('render Input');
    const { list } = this.state;

    return (
      <div>
        <ul>
          {
            list.map(el => (
              <li id={el}>
                el
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
