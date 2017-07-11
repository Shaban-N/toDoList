import * as types from '/home/nadia/Documents/react-simple-boilerplate/src/actions/actionsTypes';

export function addCard(text,columnId){
	return {
		type:types.ADD_CARD,
		text,
		columnId
	}
}	

export function deleteCard(id){
	return {
		type:types.DELETE_CARD,
		id,
	}

}

export function editCard(id,value){
	return {
		type:types.EDIT_CARD,
		id,
		value
	}
}

export function changeColor(id,value){
    return {
        type:types.CHANGE_COLOR,
        id,
        value
    }
}
