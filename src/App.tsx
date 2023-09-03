import { useState } from 'react'

import GlobalStyle from './styles/global'
import { Wrapper } from './App.styles'

import { ItemType } from './components/Item/ItemType'

import { List, ListItem } from './components/Item/Item'
import { AddItem } from './components/AddItem/AddItem'

export const App = () => {
    const [list, setList] = useState<ItemType[]>([{ id: 1, name: 'Aprendendo ReactJS', done: false }])

    const handleAddTask = (taskName: string) => {
        const newList = [...list]

        newList.push({
            id: list.length + 1,
            name: taskName,
            done: false,
        })

        setList(newList)
    }

    return (
        <div>
            <Wrapper>
                <GlobalStyle />

                <section>
                    <h6 hidden> Section </h6>

                    <h1> To-do List </h1>

                    <AddItem onEnter={handleAddTask} />

                    <List>
                        {list.map((item, index) => (
                            <ListItem key={index} item={item} />
                        ))}
                    </List>
                </section>
            </Wrapper>

            <footer>
                <a href="https://matheusramalho.dev">&copy; matheusramalho.dev</a>
            </footer>
        </div>
    )
}
