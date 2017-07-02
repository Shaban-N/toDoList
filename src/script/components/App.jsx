import React, {Component} from 'react'
import DropDownMenu from './dropDownMenu.jsx';
import  Pagination from './Pagination.jsx';
import Slider from './Slider.jsx';

export default class App extends React.Component {

    render() {
        return (
            <section className="header block">
                <div className="header_nav_wrapper">

                        <img className="banner" src="./static/bunner.jpg" alt="ToDoList"/>


                        <nav className="header_nav flex">
                            <DropDownMenu/>
                            <a className="onhover-down " href="#">Блог</a>
                            <a className="onhover-down " href="#">Поддержка</a>
                            <a className="onhover-down ">Войти</a>
                            <a className="button  ">Регистрация</a>
                        </nav>

                </div>

                <Slider />
                <Pagination />
            </section>
        )}
}