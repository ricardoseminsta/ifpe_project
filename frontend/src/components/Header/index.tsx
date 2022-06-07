import { Link } from "react-router-dom";
import * as C from './style'
import { Container } from '../MainComponents'
import { Context } from '../../contexts/Context'
import { useContext } from "react";

export const Header = () => {
    const {state, dispatch} = useContext(Context);
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
                    {state.user.logged === true &&
                    <ul>
                        <li><Link to="/">Home</Link> </li>
                        <li><Link to="/lobby">Visitantes</Link> </li>
                        <li><Link to="/transport">Transportes</Link> </li>
                    </ul>
                    }
                    {state.user.logged === false &&
                    <ul>
                        <li><Link to="/signin">Home</Link> </li>
                        <li><Link to="/signin">Visitantes</Link> </li>
                        <li><Link to="/signin">Transportes</Link> </li>
                    </ul>
                    }
                </C.Nav>
            </C.Header>
        </Container>
    );
}