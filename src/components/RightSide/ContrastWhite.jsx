import ExampleButton from '../ExampleButton.jsx'
import { getContrastRatio } from '../../utils/contrast'
import styles from "./ContrastBackGround.module.css"

export default function ContrastWhite({ rgb }) {
    const white = { r: 255, g: 255, b: 255 }
    const ratio = getContrastRatio(rgb, white).toFixed(2)
    const textColor = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`

    return (
        <div className={styles.background} style={{ backgroundColor: '#fff' }}>
            <div 
                className={styles.contrast_info} 
                style={{ color: textColor }}
            >Contarst Ratio {ratio}</div>
        </div>
    )
}
