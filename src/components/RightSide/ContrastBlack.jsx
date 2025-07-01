import ExampleButton from '../ExampleButton.jsx'
import { getContrastRatio } from '../../utils/contrast'
import styles from "./ContrastBackGround.module.css"

export default function ContrastBlack({ rgb }) {
    const black = { r: 0, g: 0, b: 0 }
    const ratio = getContrastRatio(rgb, black).toFixed(2)
    const textColor = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`

    return (
        <div className={styles.background} style={{ backgroundColor: '#000' }}>
            <div 
                className={styles.contrast_info} 
                style={{ color: textColor }}
            >Contarst Ratio {ratio}</div>
        </div>
    )
}
