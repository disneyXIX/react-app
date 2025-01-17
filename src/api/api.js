import axios from 'axios'

const instance = axios.create({
	withCredentials: true,
	headers: {
		'API-KEY': '32856676-f0b8-4aaa-b1b7-219ffa6324c4',
	},
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})

export const usersAPI = {
	getUsers(currentPage, pageSize) {
		return instance
			.get(`users?page=${currentPage}&сount=${pageSize}`)
			.then(response => response.data)
	},
	getProfile(userId) {
		return instance.get(`profile/` + userId).then(response => response.data)
	},
	followDelete(id) {
		return instance.delete(`follow/` + id).then(response => response.data)
	},
	followPost(id) {
		return instance.post(`follow/` + id).then(response => response.data)
	},
	authMe() {
		return instance.get(`auth/me`).then(response => response.data)
	},
}
