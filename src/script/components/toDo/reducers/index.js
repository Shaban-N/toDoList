import {cards} from '../reducers/cardsReducer'
import {columns} from '../reducers/columnsReducer'
import { combineReducers } from 'redux'

export default combineReducers({
  cards,
  columns
})