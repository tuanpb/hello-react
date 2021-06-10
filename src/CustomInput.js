import { useEffect, useState } from "react"
import useDebounce from './useDebounce'

export default function CustomInput(props) {

    const { value, onChange } = props

    const [text, setText] = useState(value)

    const newText = useDebounce(text)

    useEffect(() => {
        onChange(newText)
    }, [newText])

    return (
        <input
            onChange={(e) => {
                setText(e.target.value)
            }}
            style={{ padding: '8px' }}
            value={text}
        />
    )
}
