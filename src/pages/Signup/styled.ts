import styled from "styled-components";

export const Container = styled.main`

max-height: 200vh;
display: flex;
text-align: center;
flex-direction: column;
background-color: var(--independence);

h1 {
    font-size: 2.5rem;
    color: var(--white);
}

h3 {
    font-size: 1.5rem;
    color: var(--white);
}

`

export const Content = styled.div`

@media (min-width: 800px) {

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    
}

img {
    width: 100vw;

    @media (min-width: 800px) {
        width: 40vw;
    }
}

form {
    display: flex;
    flex-direction: column;
    margin: 0.2rem auto;
    width: 75vw;

    @media (min-width: 800px) {
        margin: 10rem auto;
        width: 80vw;
    }
}

input {
    background-color: var(--australian);
    border: none;
    border-radius: 8px;
    margin: 0.2rem auto;
    height: 2rem;
    width: 18rem;
    text-indent: 0.5rem;
}

button {
    font-family: 'Koulen', cursive;
    color: var(--white);
    width: 5rem;
    margin-left:1rem;
    border: none;
    border-radius: 10px;
    background-color: var(--dark-night);

    :hover {
        transition: 2s;
        background-color: var(--australian);
        color: var(--dark-night);
    }
}

#AgeInput {
    width: 12rem;
}

#InputAndButton {
    margin: 0.2rem auto;
    display: flex;
    flex-direction: row;
}

`