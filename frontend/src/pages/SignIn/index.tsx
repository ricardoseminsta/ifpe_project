import * as C from './style'
import { useContext, useState } from 'react';
import { Context } from '../../contexts/Context'
import { Container } from '../../components/MainComponents';
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {

    const navigate = useNavigate();
    const {state, dispatch} = useContext(Context);
    
    const [user, setUser] = useState(state.user.name);
    const [logged, setLogged] = useState(state.user.logged);
    const [password, setPassword] = useState('');
    const [disabled, setDisable] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if(user === 'ricar' && password === '1234'){
            dispatch({
                type: 'CHANGE_AUTH',
                payload: {
                    logged: true
                }
            });
            dispatch({
                type: 'CHANGE_NAME',
                payload: {
                    name: user
                }
            });
            navigate('/')
            
        } else {
            document.location.href = '/signin';
        }
    }
    console.log(state.user.logged);
    return (
        <Container>
            <C.SignIn>
                <form >
                    <label className="area">
                        <div className="area--title">Nome:</div>
                        <div className="area--input">
                            <input
                                type="text"
                                disabled={disabled}
                                value={user}
                                onChange={e => setUser(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Senha:</div>
                        <div className="area--input">
                            <input
                                type="password"
                                disabled={disabled}
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={disabled} onClick={handleSubmit}>Fazer Login</button>
                        </div>
                    </label>
                    User: {state.user.name}<br/>
                    Logado: {state.user.logged.toString()}<br/>
                    idade: {state.user.age}
                </form>
            </C.SignIn>
        </Container>
    );
}