
import React, { Component } from 'react'


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isOpen: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  ddmenu(){
    return(
       <div className="dropdown-list">
              <div>
                    <ul>
                      <li>First Item </li>
                      <li>Second Item </li>
                      <li>Third Item </li>
                    </ul>
                  </div>

          </div>
    )
  }

  renderListItems(){
    return( this.state.isOpen ? this.ddmenu():null)
  }
  
  render() {
    return (
      <div>
          <button onClick={this.handleClick}>
            DD
          </button>
            {this.renderListItems()}
      </div>
    );
  }
}

