const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

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
			newPostText: 'Hi',
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
			newMessageText: 'hi!!',
		},
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
		if (action.type === ADD_POST) {
			let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likesCounter: 0,
			}
			this._state.profilePage.posts.push(newPost)
			this._state.profilePage.newPostText = ''
			this._rerenderEntireTree(this._state)
		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.newPostText = action.newText
			this._rerenderEntireTree(this._state)
		} else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
			this._state.dialogsPage.newMessageText = action.text
			this._rerenderEntireTree(this._state)
		} else if (action.type === SEND_MESSAGE) {
			let text = this._state.dialogsPage.newMessageText
			this._state.dialogsPage.newMessageText = ''
			this._state.dialogsPage.messages.push({ id: 4, message: text })
			this._rerenderEntireTree(this._state)
		}
	},
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = text => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: text,
})

export const addMessageActionCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageTextActionCreator = text => ({
	type: UPDATE_NEW_MESSAGE_TEXT,
	text: text,
})

export default store
