let state = {
	profilePage: {
		posts: [
			{ id: 1, message: "Hi, it's my first post!", likesCounter: 22 },
			{ id: 2, message: 'Today is the best day in my life', likesCounter: 15 },
		],
	},

	dialogsPage: {
		dialogs: [
			{ id: 1, name: 'Valeria' },
			{ id: 2, name: 'Andre' },
			{ id: 3, name: 'Yan' },
			{ id: 4, name: 'Mum' },
		],

		messages: [
			{ id: 1, message: 'I love you,my girl!' },
			{ id: 2, message: 'Hi,bro!' },
			{ id: 3, message: 'Are you sure?' },
		],
	},
}

export default state
