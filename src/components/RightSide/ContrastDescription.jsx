import styles from './ContrastDescription.module.css'
import { getContrastRatio } from '../../utils/contrast'

export default function ContrastDescription({ rgb }) {
	const black = { r: 0, g: 0, b: 0 }
	const white = { r: 255, g: 255, b: 255 }

	const ratioBlack = getContrastRatio(rgb, black)
	const ratioWhite = getContrastRatio(rgb, white)

	const textColor = ratioBlack > ratioWhite ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)'
	const backgroundColor = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`

	return (
		<div
			className={styles.background}
			style={{ backgroundColor, color: textColor }}
		>
			<div className={styles.contrast_info}>
				<p>
					The contrast ratio, ranging from 1:1 to 21:1, must meet at least 4.5:1 for normal text and 3.0:1 for large or bold text to satisfy W3C AA standards, while AAA requires 7.0:1, as also adopted by Google and the NCC.
				</p>
			</div>
		</div>
	)
}
