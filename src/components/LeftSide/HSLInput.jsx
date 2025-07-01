import { useState, useEffect, useRef } from 'react'
import { rgbToHsl, hslToRgb } from '../../utils/convert'

export default function HSLInput({ rgb, setRgb }) {
    const [hsl, setHsl] = useState(rgbToHsl(rgb))
    const isSelfUpdating = useRef(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        let val = Number(value)
        if (Number.isNaN(val)) val = 0

        if (name === 'h') {
            val = ((val % 360) + 360) % 360
        } else {
            val = Math.min(100, Math.max(0, val))
        }

        const newHsl = { ...hsl, [name]: val }
        setHsl(newHsl)

        isSelfUpdating.current = true     // 🟡 自己觸發
        setRgb(hslToRgb(newHsl))
    }

    useEffect(() => {
        if (isSelfUpdating.current) {
            isSelfUpdating.current = false // ✅ 清除 flag，不再自觸發
            return
        }
        setHsl(rgbToHsl(rgb)) // 🟢 僅非自己更新才更新 HSL 狀態
    }, [rgb])

    return (
        <fieldset className="color_input">
            <legend>HSL</legend>
            <label htmlFor="h-input">H</label>
            <input
                id="h-input"
                name="h"
                type="number"
                placeholder="0"
                value={hsl.h}
                onChange={handleChange}
                min={0}
                max={359}
            />
            <label htmlFor="s-input">S</label>
            <input
                id="s-input"
                name="s"
                type="number"
                placeholder="100"
                value={hsl.s}
                onChange={handleChange}
                min={0}
                max={100}
            />
            <label htmlFor="l-input">L</label>
            <input
                id="l-input"
                name="l"
                type="number"
                placeholder="100"
                value={hsl.l}
                onChange={handleChange}
                min={0}
                max={100}
            />
        </fieldset>
    )
}
