import { useState, useEffect } from 'react'

// CMYK <-> RGB 轉換簡單公式

function rgbToCmyk({ r, g, b }) {
    if (r === 0 && g === 0 && b === 0) {
        return { c: 0, m: 0, y: 0, k: 100 }
    }
    let c = 1 - r / 255
    let m = 1 - g / 255
    let y = 1 - b / 255
    let k = Math.min(c, m, y)

    c = Math.round(((c - k) / (1 - k)) * 100)
    m = Math.round(((m - k) / (1 - k)) * 100)
    y = Math.round(((y - k) / (1 - k)) * 100)
    k = Math.round(k * 100)

    return { c, m, y, k }
}

function cmykToRgb({ c, m, y, k }) {
    c /= 100
    m /= 100
    y /= 100
    k /= 100

    const r = Math.round(255 * (1 - c) * (1 - k))
    const g = Math.round(255 * (1 - m) * (1 - k))
    const b = Math.round(255 * (1 - y) * (1 - k))
    return { r, g, b }
}

export default function CMYKInput({ rgb, setRgb }) {
    const [cmyk, setCmyk] = useState(rgbToCmyk(rgb))

    useEffect(() => {
        setCmyk(rgbToCmyk(rgb))
    }, [rgb])

    const handleChange = (e) => {
        const { name, value } = e.target
        let val = Math.min(100, Math.max(0, Number(value) || 0))
        const newCmyk = { ...cmyk, [name]: val }
        setCmyk(newCmyk)
        setRgb(cmykToRgb(newCmyk))
    }

    return (
        <fieldset className="color_input">
            <legend>CMYK</legend>
            <label htmlFor="c-input">C</label>
            <input
                id="c-input"
                name="c"
                type="number"
                placeholder="100"
                value={cmyk.c}
                onChange={handleChange}
                min={0}
                max={100}
            />
            <label htmlFor="m-input">M</label>
            <input
                id="m-input"
                name="m"
                type="number"
                placeholder="100"
                value={cmyk.m}
                onChange={handleChange}
                min={0}
                max={100}
            />
            <label htmlFor="y-input">Y</label>
            <input
                id="y-input"
                name="y"
                type="number"
                placeholder="100"
                value={cmyk.y}
                onChange={handleChange}
                min={0}
                max={100}
            />
            <label htmlFor="k-input">K</label>
            <input
                id="k-input"
                name="k"
                type="number"
                placeholder="100"
                value={cmyk.k}
                onChange={handleChange}
                min={0}
                max={100}
            />
        </fieldset>
    )
}
