import { ReactNode } from "react"

export type ItemType = {
    id: number;
    name: string;
    done: boolean;
};

export type ListType = {
    children: ReactNode;
};

export type ListItemType = {
    item: ItemType;
};

export type ItemContainerProps = {
    done: boolean;
}