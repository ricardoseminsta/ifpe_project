import * as C from './style'
import { useContext, useState } from 'react';
import { Context } from '../../contexts/Context'
import { Container } from '../../components/MainComponents';

export const SignIn = () => {
    
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
                    logged: logged
                }
            });
            dispatch({
                type: 'CHANGE_NAME',
                payload: {
                    name: user
                }
            });
            
            
        } else {
            document.location.href = '/';
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
                    User: {state.user.name}
                </form>
            </C.SignIn>
        </Container>
    );
}