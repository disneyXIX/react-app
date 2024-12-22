const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

const dialogsReducer = (state, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_TEXT:
			state.newMessageText = action.text
			return state
		case SEND_MESSAGE:
			let text = state.newMessageText
			state.newMessageText = ''
			state.messages.push({ id: 4, message: text })
			return state
		default:
			return state
	}
}

export const addMessageActionCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageTextActionCreator = text => ({
	type: UPDATE_NEW_MESSAGE_TEXT,
	text: text,
})

export default dialogsReducer
