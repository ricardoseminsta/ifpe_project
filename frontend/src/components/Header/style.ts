import styled from "styled-components";

export const Header = styled.header`
    margin: 0;
    background-color: #446A46;
    height: 110px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 15px;
    color: #D8E9A8;

    span {
        font-size:60px; 
    }

    a {
        border: 0px;
                background: none;
                color: #D8E9A8;
                font-size: 20px;
                text-decoration: none;
                cursor: pointer;
                
                &:hover {
                    color: #82A284;
                }   
    }

`;

export const Nav = styled.nav`
    padding: 10px 0;

    ul,
    li {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    ul {
        display: flex;
        align-items: center;
        height: 40px;
    }
    li {
        margin: 0 20px;

        a {
                border: 0px;
                background: none;
                color: #D8E9A8;
                font-size: 20px;
                text-decoration: none;
                cursor: pointer;
                
                &:hover {
                    color: #82A284;
                }   

        }
    }
`;