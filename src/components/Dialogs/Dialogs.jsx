import React from 'react'
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = props => {
	let path = '/dialogs/*' + props.id
	return (
		<div className={s.dialog}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	)
}

const Message = props => {
	return <div className={s.message}>{props.message}</div>
}

const Dialogs = props => {
	let dialogsData = [
		{ id: 1, name: 'Valeria' },
		{ id: 2, name: 'Andre' },
		{ id: 3, name: 'Yan' },
		{ id: 4, name: 'Mum' },
	]

	let messagesData = [
		{ id: 1, message: 'I love you,my girl!' },
		{ id: 2, message: 'Hi,bro!' },
		{ id: 3, message: 'Are you sure?' },
	]

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
				<DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
				<DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
				<DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
			</div>
			<div className={s.messages}>
				<Message message={messagesData[0].message} />
				<Message message={messagesData[1].message} />
				<Message message={messagesData[2].message} />
			</div>
		</div>
	)
}

export default Dialogs
