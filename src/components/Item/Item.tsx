import { useState } from 'react'

import { ListContainer, ItemContainer } from './ItemStyled'
import { ListItemType, ListType } from './ItemType'

export const List = (props: ListType) => {
    return <ListContainer>{props.children}</ListContainer>
}

export const ListItem = ({ item }: ListItemType) => {
    const [isChecked, setIsChecked] = useState<boolean>(item.done)

    return (
        <ItemContainer done={isChecked}>
            <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />

            <label> {item.name} </label>
        </ItemContainer>
    )
}
