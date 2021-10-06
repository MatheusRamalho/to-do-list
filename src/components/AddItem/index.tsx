import { useState, KeyboardEvent } from 'react';

// Styles...
import { Container } from './style';

// Types...
type AddItemProps = {
    onEnter: (taskName: string) => void; // Funcao do tipo void que recebe uma string...
}

export function AddItem( {onEnter}: AddItemProps ) {
    const [ inputText, setInputText ] = useState('');

    // Function handleKeyUp
    const handleKeyUp = (event: KeyboardEvent) => { // Recebe um evento de teclado...
        if (event.code === 'Enter' && inputText !== '') { // Verifica se a tecla solta foi o enter... e se o input nao esta vazio...
            onEnter(inputText); // Chama a prop passando o valor digitado no input...
            setInputText(''); // Limpa o input...
        }
    }

    return (
        <Container>
            <div className="image__"> + </div>

            <input
                type="text"
                placeholder="Nova tarefa"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </Container>
    );
}