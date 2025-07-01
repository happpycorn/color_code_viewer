import RGBInput from './RGBInput.jsx'
import HEXInput from './HEXInput.jsx'
import CMYKInput from './CMYKInput.jsx'
import HSLInput from './HSLInput.jsx'

export default function LeftSide({ rgb, setRgb }) {
  return (
    <>
      <RGBInput rgb={rgb} setRgb={setRgb} />
      <HEXInput rgb={rgb} setRgb={setRgb} />
      <CMYKInput rgb={rgb} setRgb={setRgb} />
      <HSLInput rgb={rgb} setRgb={setRgb} />
    </>
  )
}
