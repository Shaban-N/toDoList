import React, { Component} from 'react'
import {ColumnItem} from './ColumnItem.jsx'


export default class ColumnList extends Component{
    constructor(){
        super()
        this.state = {
            inputText: '',
        }
    }


    _handleChange = (e) => this.setState({inputText: e.target.value})
    _addColumnButton = () => {
        if (this.state.inputText){
            this.props.actions.addColumn(this.state.inputText,this.props.columnId)
            this.setState({inputText:''})
        }
    }
	render(){
		const { tasks, columns } = this.props
        const shift={left:(columns.length*310)||0}

        return(
			<div>
			{
				columns.map((column) => {
					return  (<ColumnItem 
						key={column.id}
						columnId={column.id}
                        columnName={column.name}
						tasks={ tasks.filter(task=>task.columnId==column.id)}
						position={column.position}
                        {...this.props.actions}/>)

					} )
			}
			<div className=" input-group add_column "  style={shift}>
				<input className="form-control" 
					placeholder="Add column..."
                    onChange={this._handleChange}
                    value={this.state.inputText}/>
			  		
			 	<span className="input-group-btn">
					<button className="btn btn-primary" onClick={this._addColumnButton}>Add</button>
				</span>
			</div>
			

			</div>
	)
	}
}