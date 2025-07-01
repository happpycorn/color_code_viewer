import ExampleButton from '../ExampleButton.jsx'
import { getContrastRatio } from '../../utils/contrast'

export default function ContrastWhite({ rgb }) {
  const white = { r: 255, g: 255, b: 255 }
  const ratio = getContrastRatio(rgb, white).toFixed(2)

  return (
    <div className="background" id="white">
      <div className="contrast-info" id="white_text">{ratio}</div>
      <ExampleButton backgroundColor="#fff" color="#000">Example</ExampleButton>
    </div>
  )
}
