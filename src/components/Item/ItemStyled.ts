import styled, { css } from 'styled-components'

import { ItemContainerProps } from './ItemType'

export const ListContainer = styled.ul`
    width: 100%;
    height: auto;
    margin: 2rem 0;
    padding: 1.5rem 1rem;
    border: 0.188rem solid var(--gray-700);
    border-radius: 0.75rem;
`

export const ItemContainer = styled.li<ItemContainerProps>`
    width: 100%;
    margin-bottom: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 0.063rem solid var(--gray-700);
    background-color: var(--gray-900);

    display: flex;
    align-items: center;

    input[type='checkbox'] {
        cursor: pointer;
        width: 1.563rem;
        height: 1.563rem;
        margin-right: 1rem;
        background-color: var(--primary-500);
    }

    label {
        ${(props) => {
            return css`
                font-style: ${props.done ? 'italic' : 'initial'};
                text-decoration: ${props.done ? 'line-through' : 'initial'};
            `
        }}
        color: var(--white);
    }
`
