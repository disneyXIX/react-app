import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = props => {
	let dialogs = [
		{ id: 1, name: 'Valeria' },
		{ id: 2, name: 'Andre' },
		{ id: 3, name: 'Yan' },
		{ id: 4, name: 'Mum' },
	]

	let messages = [
		{ id: 1, message: 'I love you,my girl!' },
		{ id: 2, message: 'Hi,bro!' },
		{ id: 3, message: 'Are you sure?' },
	]

	let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

	let messagesData = messages.map(m => <Message message={m.message} />)

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>{dialogsElements}</div>
			<div className={s.messages}>{messagesData}</div>
		</div>
	)
}

export default Dialogs
