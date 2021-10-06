import styled from "styled-components";

export const ListContainer = styled.ul`
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
`;

type ItemContainerProps = {
    done: boolean;
}

export const ItemContainer = styled.li(({ done }: ItemContainerProps) => (`
    width: 100%;
    padding: 10px;
    border-radius: 0.75rem;
    background-color: var(--black);

    display: flex;
    align-items: center;

    label {
        color: var(--white);
        text-decoration: ${done ? 'line-through' : 'initial'};
    }

    input {
        width: 25px;
        height: 25px;
        margin-right: 5px;
        border-radius: 0.75rem;
    }
`));