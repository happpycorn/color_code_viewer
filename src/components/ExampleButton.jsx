// 一個可重用的按鈕元件，背景和文字色由 props 控制
export default function ExampleButton({ backgroundColor, color, children }) {
  return (
    <button
      style={{
        backgroundColor,
        color,
        padding: '0.5rem 1rem',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold',
      }}
    >
      {children}
    </button>
  )
}
