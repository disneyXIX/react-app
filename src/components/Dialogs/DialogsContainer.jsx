import React from 'react'
import {
	addMessageActionCreator,
	updateNewMessageTextActionCreator,
} from '../../Redux/dialogs-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'

let mapStateToProps = state => {
	return {
		dialogsPage: state.dialogsPage,
	}
}

let mapDispatchToProps = dispatch => {
	return {
		AddMessageElement: () => {
			dispatch(addMessageActionCreator())
		},
		onMessageChange: text => {
			dispatch(updateNewMessageTextActionCreator(text))
		},
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
