import { useState } from 'react';

// STYLES...
import { ListContainer, ItemContainer } from './ItemStyled';

// TYPES...
import { ListItemType, ListType} from './ItemType';

export function List(props: ListType) {
    return (
        <ListContainer>
            {props.children}
        </ListContainer>
    );
}

export function ListItem({ item }: ListItemType) {
    const [isChecked, setIsChecked] = useState(item.done);

    return (
        <ItemContainer done={isChecked}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={e => setIsChecked(e.target.checked)}
            />

            <label> {item.name} </label>
        </ItemContainer>
    );
}