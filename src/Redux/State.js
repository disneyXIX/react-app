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
		if (action.type === 'ADD-POST') {
			let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likesCounter: 0,
			}
			this._state.profilePage.posts.push(newPost)
			this._state.profilePage.newPostText = ''
			this._rerenderEntireTree(this._state)
		} else if (action.type === 'UPDATE-NEW-POST-TEXT') {
			this._state.profilePage.newPostText = action.newText
			this._rerenderEntireTree(this._state)
		}
	},
}
export default store
