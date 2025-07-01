import { useState, useEffect, useRef } from 'react'
import { rgbToHex, hexToRgb } from '../../utils/convert'
import styles from './Input.module.css'

export default function HEXInput({ rgb, setRgb }) {
    const [hex, setHex] = useState(rgbToHex(rgb))
    const isSelfUpdating = useRef(false)

    useEffect(() => {
        if (isSelfUpdating.current) {
            isSelfUpdating.current = false
            return
        }
        setHex(rgbToHex(rgb))
    }, [rgb])

    // 使用者輸入 hex，更新狀態與 rgb
    const handleChange = (e) => {
        const val = e.target.value
        setHex(val)
        const newRgb = hexToRgb(val)
        if (newRgb) {
            isSelfUpdating.current = true
            setRgb(newRgb)
        }
    }

  return (
        <fieldset className={styles.color_input}>
            <legend>HEX</legend>
            <label htmlFor="hex-input" className={styles.legendHex}>HEX</label>
            <input
                id="hex-input"
                type="text"
                placeholder="#FFFFFF"
                value={hex}
                onChange={handleChange}
                maxLength={7}
            />
        </fieldset>
  )
}
