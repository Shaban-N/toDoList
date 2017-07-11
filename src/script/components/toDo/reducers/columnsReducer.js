import * as types from '/home/nadia/Documents/react-simple-boilerplate/src/actions/actionsTypes';

const initialState = {
    columns: [{id: 1, name: 'column111', position: 0},
        {id: 2, name: 'column222', position: 1},
        {id: 3, name: 'column333', position: 2},
        {id: 4, name: 'column444', position: 3},
    ]
};
export function columns(state = initialState, action) {
    switch (action.type) {
        case types.ADD_COLUMN:
            const id = state.columns.length + 1
            return {
                ...state,
                columns: [...state.columns, {
                    id: id,
                    name: action.name,
                    position: state.columns.length
                }]
            }

        default:
            return state;
    }

}