
import React, { Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as cardActions from "../actions/cardActions" 
import * as columnActions from "../actions/columnActions"
import Pagination from "../../Pagination.jsx"

const mapStateToProps = store => ({
		tasks: store.cards.tasks,
		columns:store.columns.columns
})


export class DashBoard extends Component{
		render(){
			const {columns,tasks,dispatch}=this.props
			const actions=bindActionCreators({...cardActions,...columnActions},dispatch)
			return(

					<Pagination tasks={tasks} columns={columns} actions={actions}/>

				)
		}

}

export default connect(mapStateToProps)(DashBoard)