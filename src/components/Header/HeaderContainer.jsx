import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { SetAuthUserData } from '../../Redux/auth-reducer'
import { authMe, usersAPI } from '../../api/api'

class HeaderContainer extends React.Component {
	componentDidMount() {
		usersAPI.authMe().then(data => {
			if (data.resultCode === 0) {
				let { id, email, login } = data.data
				this.props.SetAuthUserData(id, email, login)
			}
		})
	}

	render() {
		return <Header {...this.props} />
	}
}

let mapStateToProps = state => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
})

export default connect(mapStateToProps, { SetAuthUserData })(HeaderContainer)
