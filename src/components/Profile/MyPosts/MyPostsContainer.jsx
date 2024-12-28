import {
	addPostActionCreator,
	updateNewPostTextActionCreator,
} from '../../../Redux/profile-reducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'

let mapStateToProps = state => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText,
	}
}

let mapDispatchToProps = dispatch => {
	return {
		AddPost: () => {
			dispatch(addPostActionCreator())
		},
		onPostChange: text => {
			dispatch(updateNewPostTextActionCreator(text))
		},
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
