import { combineReducers } from 'redux'
import cust from './cust'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    cust,
    form: formReducer
})