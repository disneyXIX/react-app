import { usersAPI } from '../api/api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING'

let initialState = {
	users: [],
	pageSize: 1400,
	totalUserCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: [],
}

const usersPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userID) {
						return { ...u, followed: true }
					}
					return u
				}),
			}

		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userID) {
						return { ...u, followed: false }
					}
					return u
				}),
			}

		case SET_USERS: {
			return { ...state, users: action.users }
		}

		case SET_CURRENT_PAGE: {
			return { ...state, currentPage: action.currentPage }
		}

		case SET_TOTAL_USER_COUNT: {
			return { ...state, totalUserCount: action.totalCount }
		}

		case TOGGLE_IS_FETCHING: {
			return { ...state, isFetching: action.isFetching }
		}

		case TOGGLE_IS_FOLLOWING: {
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userID]
					: state.followingInProgress.filter(id => id != action.userID),
			}
		}

		default:
			return state
	}
}

export const follow = userID => ({ type: FOLLOW, userID })

export const unfollow = userID => ({ type: UNFOLLOW, userID })

export const setUsers = users => ({ type: SET_USERS, users })

export const setCurrentPage = currentPage => ({
	type: SET_CURRENT_PAGE,
	currentPage,
})

export const setTotalUserCount = totalCount => ({
	type: SET_TOTAL_USER_COUNT,
	totalCount,
})

export const toogleIsFetching = isFetching => ({
	type: TOGGLE_IS_FETCHING,
	isFetching,
})

export const toogleIsFollowing = (isFetching, userID) => ({
	type: TOGGLE_IS_FOLLOWING,
	isFetching,
	userID,
})

export const getUsersThunkCreator = (pageNumber, pageSize) => {
	return dispatch => {
		dispatch(setCurrentPage(pageNumber))
		dispatch(toogleIsFetching(true))
		usersAPI.getUsers(pageNumber, pageSize).then(data => {
			dispatch(toogleIsFetching(false))
			dispatch(setUsers(data.items))
			dispatch(setTotalUserCount(data.totalCount))
		})
	}
}

export const unfollowThunkCreator = userID => {
	return dispatch => {
		dispatch(toogleIsFollowing(true, userID))
		usersAPI.followDelete(userID).then(data => {
			if (data.resultCode == 0) {
				dispatch(unfollow(userID))
			}
			dispatch(toogleIsFollowing(false, userID))
		})
	}
}

export const followThunkCreator = userID => {
	return dispatch => {
		dispatch(toogleIsFollowing(true, userID))
		usersAPI.followPost(userID).then(data => {
			if (data.resultCode == 0) {
				dispatch(follow(userID))
			}
			dispatch(toogleIsFollowing(false, userID))
		})
	}
}

export default usersPageReducer
