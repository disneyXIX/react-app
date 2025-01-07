import React from 'react'
import Profile from './Profile'
import axios from 'axios'
import { connect } from 'react-redux'
import { setUserProfile } from '../../Redux/profile-reducer'
import { useParams } from 'react-router-dom'

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
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
			.then(response => {
				this.props.setUserProfile(response.data)
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
