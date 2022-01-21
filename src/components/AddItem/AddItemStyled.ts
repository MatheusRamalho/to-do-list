import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 4rem;
    margin: 2rem 0;
    padding: 1rem 1rem 1rem 0;
    border: 0.125rem solid var(--blackDark);
    border-radius: 0.75rem;

    display: flex;
    align-items: center;

    div {
        width: 4rem;
        height: inherit;
        margin-right: 1rem;
        border-top-left-radius: inherit;
        border-bottom-left-radius: inherit;
        background-color: var(--colorRegular);

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 2.5rem;
        font-weight: bold;
    }

    input {
        height: 3rem;
        padding-left: 0.8rem;
        background-color: var(--blackDark);
        border-radius: 0.75rem;
        border: 0;
        outline: none;

        font-size: 1rem;
        color: var(--white);

        flex: 1;
    }
`;