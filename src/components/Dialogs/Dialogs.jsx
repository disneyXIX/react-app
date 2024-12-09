import React from 'react'
import s from './Dialogs.module.css'

const Dialogs = props => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<div className={s.dialog + ' ' + s.active}>Valeria</div>
				<div className={s.dialog}>Andre</div>
				<div className={s.dialog}>Yan</div>
				<div className={s.dialog}>Yan</div>
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
