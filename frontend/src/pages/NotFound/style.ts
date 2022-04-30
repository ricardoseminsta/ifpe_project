import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 20px;
    font-size: 25px;
    text-transform: uppercase;

    img {
        width: 500px;
        margin-bottom: 20px;
    }

    a {
        text-decoration: none;
        border: 2px solid #446A46;
        border-radius: 5px;
        padding: 10px;
        transition: all ease .3s;
        text-decoration: none;
        color: #000;
    }

    a:hover {
        background-color: #B1E693;
    }
`;