import appSlice, { AppState } from './slices/app.slice'
import { configureStore, combineReducers, PayloadAction } from '@reduxjs/toolkit'
import { createEpicMiddleware } from 'redux-observable'
import rootEpic from './epics'

export interface RootState {
  appReducer: AppState
}

const rootReducer = combineReducers({
  appReducer: appSlice
})

const epicMiddleware = createEpicMiddleware<PayloadAction<any>>()

const store = configureStore({
  reducer: rootReducer,
  middleware: [epicMiddleware]
})

epicMiddleware.run(rootEpic)

export default store
