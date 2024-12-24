import React from 'react'
import {
	addMessageActionCreator,
	updateNewMessageTextActionCreator,
} from '../../Redux/dialogs-reducer'
import Dialogs from './Dialogs'

const DialogsContainer = props => {
	let state = props.store.getState().dialogsPage

	let AddMessageElement = () => {
		props.store.dispatch(addMessageActionCreator())
	}
	let onMessageChange = text => {
		props.store.dispatch(updateNewMessageTextActionCreator(text))
	}

	return (
		<Dialogs
			store={props.store}
			updateNewMessageTextActionCreator={onMessageChange}
			addMessageActionCreator={AddMessageElement}
			dialogsPage={state}
		/>
	)
}

export default DialogsContainer
