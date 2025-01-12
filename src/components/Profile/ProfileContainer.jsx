import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { setUserProfile } from '../../Redux/profile-reducer'
import { useParams } from 'react-router-dom'
import { usersAPI } from '../../api/api'

export function withRouter(Component) {
	return props => {
		const params = useParams()
		return <Component {...props} match={{ params }} />
	}
}

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userID

		if (!userId) {
			userId = 32015
		}
		usersAPI.getProfile(userId).then(data => {
			this.props.setUserProfile(data)
		})
	}
	render() {
		return <Profile {...this.props} profile={this.props.profile} />
	}
}

let mapStateToProps = state => ({
	profile: state.profilePage.profile,
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile })(
	WithUrlDataContainerComponent
)
