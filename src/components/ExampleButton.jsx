import styles from './ExampleButton.module.css'

export default function ExampleButton({ color, children }) {
    return (
        <button
            className={styles.button}
            style={{ color }}
        >
            {children}
        </button>
    )
}
