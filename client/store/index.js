import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import trainsReducer from './trains'

const appReducer = combineReducers({
  trains: trainsReducer
})

const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(appReducer, middleware)

export default store
export * from './trains'
