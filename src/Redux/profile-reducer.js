const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let initialState = {
	posts: [
		{ id: 1, message: "Hi, it's my first post!", likesCounter: 22 },
		{
			id: 2,
			message: 'Today is the best day in my life',
			likesCounter: 15,
		},
	],
	newPostText: 'Hi!',
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 5,
				message: state.newPostText,
				likesCounter: 0,
			}
			let stateCopy = { ...state }
			stateCopy.posts = [...state.posts]
			stateCopy.posts.push(newPost)
			stateCopy.newPostText = ''
			return stateCopy
		}

		case UPDATE_NEW_POST_TEXT: {
			let stateCopy = { ...state }
			stateCopy.newPostText = action.newText
			return stateCopy
		}
		default:
			return state
	}
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = text => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: text,
})

export default profileReducer
