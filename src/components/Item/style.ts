import styled from "styled-components";

export const ListContainer = styled.ul`
    width: 100%;
    height: auto;
    margin: 2rem 0;
    padding: 1.5rem 1rem;
    border: 0.063rem solid var(--black);
    border-radius: 0.75rem;
`;

type ItemContainerProps = {
    done: boolean;
}

export const ItemContainer = styled.li(({ done }: ItemContainerProps) => (`
    width: 100%;
    margin-bottom: 1rem;
    padding: 10px;
    border-radius: 0.75rem;
    background-color: var(--black);

    display: flex;
    align-items: center;

    label {
        color: var(--white);
        text-decoration: ${done ? 'line-through' : 'initial'};
    }

    input[type="checkbox"] {
        cursor: pointer;

        width: 25px;
        height: 25px;
        margin-right: 1rem;
        border-radius: 1.25rem !important;
    }
`));