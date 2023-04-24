import { FC } from 'react'

import Logo from './Logo'
import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
	return (
		<aside className={styles.sidebar}>
			<Logo /> 
			<div className={styles.copy}>Made with ♥ by RED Project Team</div>
		</aside>
	)
}

export default Sidebar
