import styles from "./styles.module.css"

type Props = {
    value?: string
    size?: "default" | "small"
    color?: "default" | "correct" | "wrong"
}

export function Letters({ value = "", size = "default", color = "default" }: Props){
    return (
        <div className={`
                ${styles.letters}
                ${size === "small" && styles.lettersSmall}
                ${color === "correct" && styles.lettersCorrect}
                ${color === "wrong" && styles.lettersWrong}
            `}>
            <span>{value}</span>
        </div>
    )
}