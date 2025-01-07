import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import { Route, Routes } from 'react-router-dom'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersPageContainer from './components/UsersPage/UsersPageContainer'
import ProfileContainer from './components/Profile/ProfileContainer'

const App = props => {
	return (
		<div className='app-wrapper'>
			<Header />
			<Nav />
			<div className='app-wrapper-content'>
				<Routes>
					<Route path='/profile' element={<ProfileContainer />} />
					<Route path='/dialogs/*' element={<DialogsContainer />} />
					<Route path='/news' element={<News />} />
					<Route path='/music' element={<Music />} />
					<Route path='/users' element={<UsersPageContainer />} />
					<Route path='/settings' element={<Settings />} />
				</Routes>
			</div>
		</div>
	)
}
export default App
