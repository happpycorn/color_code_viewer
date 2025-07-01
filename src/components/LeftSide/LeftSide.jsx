import RGBInput from './RGBInput.jsx'
import HEXInput from './HEXInput.jsx'
import CMYKInput from './CMYKInput.jsx'
import HSLInput from './HSLInput.jsx'
import styles from './LeftSide.module.css'

export default function LeftSide({ rgb, setRgb }) {
  return (
    <div className={styles.container}>
      <HEXInput rgb={rgb} setRgb={setRgb} />
      <RGBInput rgb={rgb} setRgb={setRgb} />
      <CMYKInput rgb={rgb} setRgb={setRgb} />
      <HSLInput rgb={rgb} setRgb={setRgb} />
    </div>
  )
}
