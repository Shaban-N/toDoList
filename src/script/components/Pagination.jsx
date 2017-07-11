import  React,{Component} from 'react'
import {ColumnItem} from './toDo/components/ColumnItem.jsx'

export default class Pagination extends Component {

    constructor() {
        super();
        this.state = {
            currentPage: 1,
            todosPerPage: 2,
            inputText: '',
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    _handleChange = (e) => this.setState({inputText: e.target.value});
    _addColumnButton = () => {
        if (this.state.inputText){
            this.props.actions.addColumn(this.state.inputText,this.props.columnId)
            this.setState({inputText:''})
        }
    };

    render() {
        const { tasks, columns } = this.props;
        const { currentPage, todosPerPage } = this.state;

        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = this.props.columns.slice(indexOfFirstTodo, indexOfLastTodo);

        const pageNumbers = [];
        const allPagesCount=Math.ceil(columns.length / todosPerPage)
        const pagesFrom=Math.max(1 ,currentPage-4)
        const pagesTo=Math.min(allPagesCount,pagesFrom+8)
        for (let i = pagesFrom; i <=pagesTo; i++) {
            pageNumbers.push(i);
        }


        const shift={left:(columns.length*310)||0}



        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </li>
            );
        });

        return (

            <div className="pagination_wrapper">
                <div className="to-do_wrapper">
                {
                    currentTodos.map((column) => {
                        return  (<ColumnItem
                            key={column.id}
                            columnId={column.id}
                            columnName={column.name}
                            tasks={ tasks.filter(task=>task.columnId==column.id)}
                            position={column.position}
                            {...this.props.actions}/>)

                    } )
                }

                <div className=" add_column "  style={shift}>
                    <input className=""
                           placeholder="Add column..."
                           onChange={this._handleChange}
                           value={this.state.inputText}/>

                    <span className="input-group-btn">
					    <button className="btn btn-primary" onClick={this._addColumnButton}>Add</button>
				    </span>
                </div>
                </div>
                <ul id="page-numbers">
                    {renderPageNumbers}
                </ul>

            </div>
        );
    }
}





