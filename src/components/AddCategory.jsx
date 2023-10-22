import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState(['One Punch'])
    const onInputChanged = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        const inputValueWithoutSpace = inputValue.trim()
        event.preventDefault()
        if (inputValueWithoutSpace <= 1) return
        onNewCategory(inputValueWithoutSpace)
        setInputValue('')
    }

    return (
        <form onSubmit={ (event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChanged }
                // onChange={ (event) => onInputChanged(event) }
            />
        </form>
    )
}
