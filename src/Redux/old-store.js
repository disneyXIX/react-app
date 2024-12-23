import dialogsReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'
import sidebarReducer from './sidebar-reducer'

let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: "Hi, it's my first post!", likesCounter: 22 },
				{
					id: 2,
					message: 'Today is the best day in my life',
					likesCounter: 15,
				},
			],
			newPostText: 'Hi!',
		},

		dialogsPage: {
			dialogs: [
				{ id: 1, name: 'Valeria' },
				{ id: 2, name: 'Andre' },
				{ id: 3, name: 'Yan' },
				{ id: 4, name: 'Mum' },
			],

			messages: [
				{ id: 1, message: 'I love you,my girl!' },
				{ id: 2, message: 'Hi,bro!' },
				{ id: 3, message: 'Are you sure?' },
			],
			newMessageText: 'Hello',
		},

		sidebar: {},
	},

	_rerenderEntireTree() {
		console.log('state was changed')
	},

	getState() {
		return this._state
	},

	subscribe(observer) {
		this._rerenderEntireTree = observer
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
		this._state.sidebar = sidebarReducer(this._state.sidebar, action)

		this._rerenderEntireTree(this._state)
	},
}
export default store
