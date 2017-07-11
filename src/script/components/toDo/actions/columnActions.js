import * as types from '/home/nadia/Documents/react-simple-boilerplate/src/actions/actionsTypes';

export function addColumn(name,columnId){
	return{
		type:types.ADD_COLUMN,
		name,
		columnId,
	}
}