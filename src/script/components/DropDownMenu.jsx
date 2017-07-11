import React, {Component} from 'react'

export default class DropDownMenu extends React.Component {

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

    ddmenu() {
        return (
            <div className="overflow-menu">
                <a className="overflow-menu__item" href="#">Light</a>
                <a className="overflow-menu__item" href="#">Medium</a>
                <a className="overflow-menu__item" href="#">Premium</a>
            </div>
        )
    }

    renderListItems() {
        return ( this.state.isOpen ? this.ddmenu() : null)
    }

    render() {
        return (
            <div>
                <div className=" overflow-menu-wrapper">
                    <a onClick={this.handleClick} className=" onhover-down">
                        Начало работы
                    </a>
                    {this.renderListItems()}
                </div>
            </div>
        );
    }
}