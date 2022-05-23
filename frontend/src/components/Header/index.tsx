import { Link } from "react-router-dom";
import * as C from './style'
import { Container } from '../MainComponents'

export const Header = () => {
    return (
        <Container>
            <C.Header>
                <C.Logo>
                    <Link to="/">
                        <span>IF</span>
                        <p>CAFI</p>
                    </Link>
                </C.Logo>
                <C.Nav>
                    <ul>
                        <li><Link to="/">Home</Link> </li>
                        <li><Link to="/lobby">Visitantes</Link> </li>
                        <li><Link to="/transport">Transportes</Link> </li>
                    </ul>
                </C.Nav>
            </C.Header>
        </Container>
    );
}