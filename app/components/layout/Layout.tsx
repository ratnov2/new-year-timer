import { FC, PropsWithChildren } from 'react'

// import styles from './Layout.module.scss'

import Meta from './meta/Meta'
import { ISeo } from './meta/meta.interface'
import Sidebar from './sidebar/Sidebar'

interface ILayout extends ISeo {}

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, ...rest }) => {
	return (
		<>
			<Meta {...rest} />
			<div >
				<Sidebar />
				<main>
					<section >{children}</section>
				</main>
			</div>
		</>
	)
}

export default Layout
