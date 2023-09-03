import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 5rem;
    margin: 2rem 0;
    padding-right: 1rem;
    border: 0.125rem solid var(--gray-700);
    border-radius: 0.75rem;

    display: flex;
    align-items: center;

    div {
        width: 3rem;
        height: inherit;
        margin-right: 1rem;
        border-top-left-radius: inherit;
        border-bottom-left-radius: inherit;
        background-color: var(--primary-500);
        color: var(--gray-800);

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 2.5rem;
        font-weight: bold;
    }

    input {
        height: 3.8rem;
        padding-left: 0.8rem;
        border: 0.063rem solid var(--gray-500);
        background-color: var(--gray-900);
        border-radius: 0.75rem;
        outline: none;

        font-size: 1rem;
        color: var(--white);

        flex: 1;
    }
`
