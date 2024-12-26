import React from 'react'
import {
	addMessageActionCreator,
	updateNewMessageTextActionCreator,
} from '../../Redux/dialogs-reducer'
import Dialogs from './Dialogs'
import storeContext from '../../storeContext'

const DialogsContainer = props => {
	return (
		<storeContext.Consumer>
			{store => {
				let AddMessageElement = () => {
					store.dispatch(addMessageActionCreator())
				}
				let onMessageChange = text => {
					store.dispatch(updateNewMessageTextActionCreator(text))
				}
				return (
					<Dialogs
						store={props.store}
						updateNewMessageTextActionCreator={onMessageChange}
						addMessageActionCreator={AddMessageElement}
						dialogsPage={store.getState().dialogsPage}
					/>
				)
			}}
		</storeContext.Consumer>
	)
}

export default DialogsContainer
