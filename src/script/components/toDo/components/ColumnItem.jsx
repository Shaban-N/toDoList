import React, { PropTypes,Component } from 'react'

export class ColumnItem	 extends Component {
    constructor(){
        super()
        this.state = {
            inputText: '',
        }
    }

    _handleChange = (e) => this.setState({inputText: e.target.value})
    _addCardButton = () => {
        if (this.state.inputText){
            this.props.addCard(this.state.inputText,this.props.columnId)
            this.setState({inputText:''})
        }
    }
    textareaHandleChange=(e)=>this.props.editCard(e.target.id,e.target.value)

    _colorHandleChange=(id, value)=> this.props.changeColor(id, value)

    render() {
       // const leftShift={left:this.props.position*310}
        const { columnName } = this.props
        return (
            <div  /*style={leftShift}*/ className="column">
                <h4>{columnName}</h4>
                <div>
                    {this.props.tasks.map((task) =>{
                        return (<div key={task.id} className ="card" style={{backgroundColor:task.color}}>
                            <textarea
                                id={task.id}
                                value={task.text}
                                onChange={this.textareaHandleChange}>

                            </textarea>
                            <button className="dd_btn" onClick={()=>{this.props.deleteCard(task.id)}}>
                                Delete
                            </button>
                            <input type="color"
                                   name="favcolor"
                                   value={task.color}
                                   onChange={(e)=>this._colorHandleChange(task.id,e.target.value)}
                            />
                        </div>)}
                    )}

                </div>


              <div className="input-group">
                <input className="form-control"
                    placeholder="New card..."
                    value={this.state.inputText}
                    onChange={this._handleChange}
                />
                <span className="input-group-btn">
                        <button className="btn btn-primary" onClick={this._addCardButton}> Add </button>
                  </span>
                </div>

            </div>
            )
    }
}



