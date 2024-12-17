import React from 'react'
import s from './../Dialogs.module.css'

const Message = props => {
	let newMessageElement = React.createRef()

	let AddMessageElement = () => {
		let text = newMessageElement.current.value
		alert(text)
	}

	return (
		<div>
			<div className={s.message}>{props.message}</div>
			<textarea ref={newMessageElement} placeholder='write something here' />
			<button onClick={AddMessageElement}>Send message</button>
		</div>
	)
}

export default Message
