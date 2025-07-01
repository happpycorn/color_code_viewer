import { useState } from 'react'
import LeftSide from './components/LeftSide/LeftSide.jsx'
import ContrastWhite from './components/RightSide/ContrastWhite.jsx'
import ContrastBlack from './components/RightSide/ContrastBlack.jsx'
import ContrastDescription from './components/RightSide/ContrastDescription.jsx'
import styles from './App.module.css'

export default function App() {
	const [rgb, setRgb] = useState({ r: 255, g: 255, b: 255 })

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Title</h1>
			<div className={styles.wrapper}>
				<div className={styles.left_side}>
					<LeftSide rgb={rgb} setRgb={setRgb} />
				</div>
				<div className={styles.right_side}>
					<ContrastWhite rgb={rgb} />
					<ContrastDescription />
					<ContrastBlack rgb={rgb} />
				</div>
			</div>
		</div>
	)
}
