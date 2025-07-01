export default function RGBInput({ rgb, setRgb }) {
    const handleChange = (e) => {
        const { name, value } = e.target
        const num = Math.min(255, Math.max(0, Number(value) || 0)) // 限制0~255
        setRgb({ ...rgb, [name]: num })
    }

  return (
        <fieldset className="color_input">
            <legend>RGB</legend>
            <label htmlFor="r-input">R</label>
            <input
                id="r-input"
                name="r"
                type="number"
                placeholder="255"
                value={rgb.r}
                onChange={handleChange}
                min={0}
                max={255}
            />
            <label htmlFor="g-input">G</label>
            <input
                id="g-input"
                name="g"
                type="number"
                placeholder="255"
                value={rgb.g}
                onChange={handleChange}
                min={0}
                max={255}
            />
            <label htmlFor="b-input">B</label>
            <input
                id="b-input"
                name="b"
                type="number"
                placeholder="255"
                value={rgb.b}
                onChange={handleChange}
                min={0}
                max={255}
            />
        </fieldset>
    )
}
