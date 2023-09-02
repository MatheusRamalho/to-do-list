import { useState } from 'react';

// COMPONENTS...
import { AddItem } from './components/AddItem/AddItem';
import { List, ListItem } from './components/Item/Item';

// STYLES...
import GlobalStyle from './styles/global';
import { Wrapper } from './App.styles';

// TYPES...
import { ItemType } from './components/Item/ItemType';

export const App = () => {
    const [list, setList] = useState<ItemType[]>([
        { id: 1, name: 'Aprendendo ReactJS', done: false }
    ]);

    // Recebe uma string e adiciona um novo item na lista...
    const handleAddTask = (taskName: string) => {
        let newList = [...list]; // clonando a lista...

        newList.push({ // Adiciona item...
            id: list.length + 1, // Pega o tamanho da lista e soma mais um...
            name: taskName, // Recebe o valor do parametro...
            done: false, // Todo item novo inicia como falso...
        });

        setList(newList); // Adiciona a lista original...
    }

    return (
        <Wrapper>
            <GlobalStyle />

            <section>
                <h6 hidden> Section </h6>

                <h1> To-do List </h1>

                <AddItem
                    onEnter={handleAddTask}
                />

                <List>
                    {list.map((item, index) => (
                        <ListItem
                            key={index}
                            item={item}
                        />
                    ))}
                </List>
            </section>
        </Wrapper>
    );
}
