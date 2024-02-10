import { useState, KeyboardEvent } from 'react'

export interface NewTaskProps {
    onEnter: (taskName: string) => void
}

export const NewTask = ({ onEnter }: NewTaskProps) => {
    const [inputText, setInputText] = useState('')

    const handleKeyUp = (event: KeyboardEvent) => {
        if (event.code === 'Enter' && inputText !== '') {
            // Verifica se a tecla solta foi o enter e se o input nao esta vazio...
            onEnter(inputText)
            setInputText('')
        }
    }

    return (
        <div className="w-full h-20 rounded-lg flex items-center my-8">
            <input
                className="w-full h-16 p-3 rounded-lg text-base border border-gray-500 bg-gray-900 text-white outline-none"
                type="text"
                placeholder="Informe o novo item da lista"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </div>
    )
}
