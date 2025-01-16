import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { authMeThunkCreator, SetAuthUserData } from '../../Redux/auth-reducer'

class HeaderContainer extends React.Component {
	componentDidMount() {
		this.props.authMeThunkCreator()
	}

	render() {
		return <Header {...this.props} />
	}
}

let mapStateToProps = state => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
})

export default connect(mapStateToProps, {
	SetAuthUserData,
	authMeThunkCreator,
})(HeaderContainer)
