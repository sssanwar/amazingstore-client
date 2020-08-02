import { combineEpics } from 'redux-observable'
import { retrieveProductsEpic, calculateTotalEpic } from './app.epic'

const epics = combineEpics(retrieveProductsEpic, calculateTotalEpic)

export default epics
