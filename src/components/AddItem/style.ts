import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    margin: 2rem 0;
    padding: 1rem;
    border: 0.125rem solid var(--black);
    border-radius: 0.75rem;

    display: flex;
    align-items: center;

    .image__ {
        width: 2rem;
        height: 2rem;
        margin-right: 1rem;
        border-radius: 50%;
        background-color: var(--color);
        
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 2rem;
        font-weight: bold;
    }
    
    input { 
        height: 40px;
        padding-left: 0.8rem;
        background-color: var(--black);
        border-radius: 0.75rem;
        border: 0;
        outline: none;

        font-size: 1rem;
        color: var(--white);
        
        flex: 1;
    }
`;