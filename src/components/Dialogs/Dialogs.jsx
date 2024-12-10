import React from 'react'
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const Dialogs = props => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<div className={s.dialog + ' ' + s.active}>
					<NavLink to='/dialogs/1'>Valeria</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to='/dialogs/2'>Andre</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to='/dialogs/3'>Yan</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to='/dialogs/4'>Mum</NavLink>
				</div>
			</div>
			<div className={s.messages}>
				<div className={s.message}>I love you,my girl!</div>
				<div className={s.message}>Hi,bro!</div>
				<div className={s.message}>Are you sure?</div>
			</div>
		</div>
	)
}

export default Dialogs
