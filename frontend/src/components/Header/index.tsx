import { Link } from "react-router-dom";
import * as C from './style'
import { Container } from '../MainComponents'

export const Header = () => {
    return (
        <Container>
            <C.Header>

                <C.Logo>
                    <span>IF</span>
                    <p>CAFI</p>
                </C.Logo>
                <C.Nav>
                    <ul>
                        <li><Link to="/">Home</Link> </li>
                        <li><Link to="/">Visitantes</Link> </li>
                        <li><Link to="/">Transportes</Link> </li>
                    </ul>
                </C.Nav>
            </C.Header>
        </Container>
    );
}