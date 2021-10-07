import { ReactNode, useState } from 'react';

// Styles...
import { ListContainer, ItemContainer } from './style';

// Types...
import { ItemType} from '../../Types/Item';

type ListProps = {
    children: ReactNode;
}
export function List(props: ListProps) {
    return (
        <ListContainer>
            {props.children}
        </ListContainer>
    );
}

type ItemProps = {
    item: ItemType;
}

export function ListItem({ item }: ItemProps) {
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