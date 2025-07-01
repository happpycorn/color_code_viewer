import ExampleButton from '../ExampleButton.jsx'
import { getContrastRatio } from '../../utils/contrast'

export default function ContrastBlack({ rgb }) {
  const black = { r: 0, g: 0, b: 0 }
  const ratio = getContrastRatio(rgb, black).toFixed(2)

  return (
    <div className="background" id="black">
      <div className="contrast-info" id="black_text">{ratio}</div>
      <ExampleButton backgroundColor="#000" color="#fff">Example</ExampleButton>
    </div>
  )
}
