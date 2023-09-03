import { useState, KeyboardEvent } from 'react'

import { Container } from './AddItemStyled'
import { AddItemType } from './AddItemType'

export const AddItem = ({ onEnter }: AddItemType) => {
    const [inputText, setInputText] = useState('')

    const handleKeyUp = (event: KeyboardEvent) => {
        // Recebe um evento de teclado...
        if (event.code === 'Enter' && inputText !== '') {
            // Verifica se a tecla solta foi o enter e se o input nao esta vazio...
            onEnter(inputText) // Chama a prop passando o valor digitado no input...
            setInputText('')
        }
    }

    return (
        <Container>
            <div> + </div>

            <input
                type="text"
                placeholder="Informe o novo item da lista"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </Container>
    )
}
