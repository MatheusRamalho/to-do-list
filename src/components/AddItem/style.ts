import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    margin: 1.25rem 0;
    padding: 1rem;
    border: 0.125rem solid var(--black);
    border-radius: 0.75rem;

    display: flex;
    align-items: center;

    .image__ {
        margin-right: 1rem;

    }
    
    input { 
        border: 0;
        background-color: transparent;
        outline: none;

        font-size: 1rem;
        color: var(--white);

        flex: 1;

    }
`;