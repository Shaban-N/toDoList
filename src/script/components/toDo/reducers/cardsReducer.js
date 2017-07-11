import * as types from '/home/nadia/Documents/react-simple-boilerplate/src/actions/actionsTypes';


const initialState={
	tasks: [
		{id:1, text:'hello',  columnId:1,color: '#ccf2ff'},
		{id:2, text:'hello1', columnId:2,color: '#cb60e0'},
        {id:3, text:'hello2', columnId:3,color: '#27c463'},
		{id:4, text:'hello3', columnId:4,color: '#af053b'},
		{id:5, text:'hello4', columnId:1,color: '#dddb3e'},
		{id:6, text:'hello5', columnId:4,color: '#ccf2ff'},
	]
}

export function cards(state=initialState, action){
	switch (action.type){
		case types.ADD_CARD:
			const id = state.tasks.length>0 ? state.tasks[state.tasks.length-1].id+1 : 1;
			return {
				...state,
				tasks: [...state.tasks, {id, text:action.text, 	columnId:action.columnId,color: '#ccf2ff'}]
			};
        case types.DELETE_CARD:
			return {
                ...state,
				tasks:[...state.tasks.filter(card => card.id!==action.id)]
            };
		case types.EDIT_CARD:
			return{
				...state,
				tasks:[...state.tasks.map((card)=>{if (card.id==action.id)
													card.text=action.value
																	return card})]
			};
		case types.CHANGE_COLOR:
			return{
                ...state,
                tasks:[...state.tasks.map((card)=>{if (card.id==action.id)
                    card.color=action.value
                    return card})]
			};
		default:
			return state;
	}
}
	