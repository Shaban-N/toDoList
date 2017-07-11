import React, {Component} from 'react'
import DropDownMenu from './DropDownMenu.jsx';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Slider from './Slider.jsx';
import Pagination from './Pagination.jsx';
import * as cardActions from "./toDo/actions/cardActions"
import * as columnActions from "./toDo/actions/columnActions"

const mapStateToProps = store => ({
    tasks: store.cards.tasks,
    columns:store.columns.columns
})


 class App extends React.Component {
    render() {
        const {columns,tasks,dispatch}=this.props
        const actions=bindActionCreators({...cardActions,...columnActions},dispatch)

        return (
            <div>
                <header className="block">
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
                </header>
                <Slider />
                <Pagination tasks={tasks} columns={columns} actions={actions}/>
            </div>
        )}
}
export default connect(mapStateToProps)(App)