import React from 'react'
import s from './Nav.module.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {
	return (
		<nav className={s.nav}>
			<div className={s.item}>
				<NavLink
					to='/profile'
					className={({ isActive }) => (isActive ? s.activeLink : s.item)}
				>
					Profile
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink
					to='/dialogs'
					className={({ isActive }) => (isActive ? s.activeLink : s.item)}
				>
					Message
				</NavLink>
			</div>

			<div className={s.item}>
				<NavLink
					to='/news'
					className={({ isActive }) => (isActive ? s.activeLink : s.item)}
				>
					News
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink
					to='/music'
					className={({ isActive }) => (isActive ? s.activeLink : s.item)}
				>
					Music
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink
					to='/users'
					className={({ isActive }) => (isActive ? s.activeLink : s.item)}
				>
					Users List
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink
					to='/settings'
					className={({ isActive }) => (isActive ? s.activeLink : s.item)}
				>
					Settings
				</NavLink>
			</div>
		</nav>
	)
}

export default Nav
