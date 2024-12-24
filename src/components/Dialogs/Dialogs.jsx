import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = props => {
	let state = props.dialogsPage

	let dialogsElements = state.dialogs.map(d => (
		<DialogItem name={d.name} id={d.id} />
	))
	let messagesData = state.messages.map(m => <Message message={m.message} />)
	let newMessageText = state.newMessageText

	let AddMessageElement = () => {
		props.addMessageActionCreator()
	}
	let onMessageChange = e => {
		let text = e.target.value
		props.updateNewMessageTextActionCreator(text)
	}

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>{dialogsElements}</div>
			<div className={s.messages}>
				<div>{messagesData}</div>
				<div>
					<div>
						<textarea
							placeholder='write something here..'
							value={state.newMessageText}
							onChange={onMessageChange}
						/>
					</div>
					<div>
						<button onClick={AddMessageElement}>Send message</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dialogs
