import { combineReducers, legacy_createStore as createStore } from 'redux'
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'
import usersPageReducer from './usersPage-reducer'
import authReducer from './auth-reducer'

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: usersPageReducer,
	sidebar: sidebarReducer,
	auth: authReducer,
})

let store = createStore(reducers)

window.store = store

export default store
