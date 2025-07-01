export function rgbToHsl({ r, g, b }) {
    r /= 255
    g /= 255
    b /= 255
    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    let h, s, l
    l = (max + min) / 2

    if (max === min) {
        h = s = 0 // achromatic
    } else {
        const d = max - min
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0)
                break
            case g:
                h = (b - r) / d + 2
                break
            case b:
                h = (r - g) / d + 4
                break
            default:
                h = 0
        }
        h /= 6
    }
    h = Math.round(h * 360)
    s = Math.round(s * 100)
    l = Math.round(l * 100)
    return { h, s, l }
}

export function hslToRgb({ h, s, l }) {
    s /= 100
    l /= 100

    function hue2rgb(p, q, t) {
        if (t < 0) t += 1
        if (t > 1) t -= 1
        if (t < 1 / 6) return p + (q - p) * 6 * t
        if (t < 1 / 2) return q
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
        return p
    }

    let r, g, b
    if (s === 0) {
        r = g = b = l // achromatic
    } else {
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s
        const p = 2 * l - q
        r = hue2rgb(p, q, h / 360 + 1 / 3)
        g = hue2rgb(p, q, h / 360)
        b = hue2rgb(p, q, h / 360 - 1 / 3)
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255),
    }
}

export function rgbToHex({ r, g, b }) {
    const toHex = (v) => v.toString(16).padStart(2, '0')
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase()
}

export function hexToRgb(hex) {
    let c = hex.trim().toLowerCase()
    if (c[0] === '#') c = c.slice(1)
    if (c.length === 3)
        c = c
        .split('')
        .map((ch) => ch + ch)
        .join('')
    if (!/^[0-9a-f]{6}$/.test(c)) return null
    return {
        r: parseInt(c.slice(0, 2), 16),
        g: parseInt(c.slice(2, 4), 16),
        b: parseInt(c.slice(4, 6), 16),
    }
}