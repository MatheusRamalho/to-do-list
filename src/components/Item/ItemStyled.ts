import styled from "styled-components";

// TYPES...
import { ItemContainerProps } from "./ItemType";

export const ListContainer = styled.ul`
    width: 100%;
    height: auto;
    margin: 2rem 0;
    padding: 1.5rem 1rem;
    border: 0.188rem solid var(--blackDark);
    border-radius: 0.75rem;
`;

export const ItemContainer = styled.li(({ done }: ItemContainerProps) => (`
    width: 100%;
    margin-bottom: 1rem;
    padding: 1rem;
    border-radius: 0.75rem;
    background-color: var(--blackDark);

    display: flex;
    align-items: center;

    label {
        font-style: ${done ? 'italic' : 'initial'};
        text-decoration: ${done ? 'line-through' : 'initial'};
        color: var(--white);
    }

    input[type="checkbox"] {
        cursor: pointer;
        width: 1.563rem;
        height: 1.563rem;
        margin-right: 1rem;
        background-color: var(--colorRegular);
    }
`));