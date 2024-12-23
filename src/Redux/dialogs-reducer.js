const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
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
