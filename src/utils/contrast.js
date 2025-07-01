// 計算兩個 RGB 色彩間對比度（contrast ratio）
// RGB 格式：{ r: 0-255, g: 0-255, b: 0-255 }
// 對比度計算參考 WCAG 2.1 規範

function luminance({ r, g, b }) {
  const a = [r, g, b].map((v) => {
    v /= 255
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2]
}

export function getContrastRatio(color1, color2) {
  const L1 = luminance(color1)
  const L2 = luminance(color2)
  const lighter = Math.max(L1, L2)
  const darker = Math.min(L1, L2)
  return (lighter + 0.05) / (darker + 0.05)
}
