import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import App from './App'

let dialogs = [
	{ id: 1, name: 'Valeria' },
	{ id: 2, name: 'Andre' },
	{ id: 3, name: 'Yan' },
	{ id: 4, name: 'Mum' },
]

let messages = [
	{ id: 1, message: 'I love you,my girl!' },
	{ id: 2, message: 'Hi,bro!' },
	{ id: 3, message: 'Are you sure?' },
]

let posts = [
	{ id: 1, message: "Hi, it's my first post!", likesCounter: 22 },
	{ id: 2, message: 'Today is the best day in my life', likesCounter: 15 },
]

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<App dialogs={dialogs} messages={messages} posts={posts} />
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
