import styled from 'styled-components'

export const Wrapper = styled.main`
    width: 100%;
    min-height: 100vh;
    padding: 2rem;
    background-color: var(--gray-800);

    color: var(--white);

    section {
        max-width: 61.25rem;
        height: auto;
        margin: auto;
        padding: 0.625rem;

        h1 {
            margin: 0;
            padding: 0 0 1rem 0;

            text-align: center;
            color: var(--primary-500);
        }
    }
`
