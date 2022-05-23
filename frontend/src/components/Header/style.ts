import styled from "styled-components";

export const Header = styled.header`
    background-color: #446A46;
    height: 110px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px
`;
export const Logo = styled.div`
    display: flex;
    flex-direction: column;
    color: #D8E9A8;

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
            
            span {
                font-size:60px;
            }
            
            p {
                padding-bottom: 15px
            }   
    }

`;

export const Nav = styled.nav`
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
        margin-left: 20px;

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