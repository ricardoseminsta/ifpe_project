import styled from "styled-components";

export const ItemHome = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;

margin-top: 20px;

a:hover,
img:hover {
    opacity: .8;
}

a {
    text-decoration: none;
    color: #000;
    text-transform: uppercase;
}

img {
    width: 200px;
    height: 200px;
}
`;
