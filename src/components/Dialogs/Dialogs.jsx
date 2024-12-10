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
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<DialogItem name='Valeria' id='1' />
				<DialogItem name='Andre' id='2' />
				<DialogItem name='Yan' id='3' />
				<DialogItem name='Mum' id='4' />
			</div>
			<div className={s.messages}>
				<Message message='I love you,my girl!' />
				<Message message='Hi,bro!' />
				<Message message='Are you sure?' />
			</div>
		</div>
	)
}

export default Dialogs
