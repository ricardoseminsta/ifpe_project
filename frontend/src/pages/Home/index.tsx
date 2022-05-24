import './style'
import { Container } from '../../components/MainComponents'
import { ItemHome } from '../../components/ItemHome';
import * as C from './style'
import { Context } from '../../contexts/Context'

import imgLobby from '../../assets/img/svg/undraw_profile_details_re_ch9r.svg'
import imgTrans from '../../assets/img/svg/undraw_navigator_a479.svg'
import { useContext } from 'react';


export const Home = () => {
    const {state, dispatch} = useContext(Context);
    return (
        <Container>
            <C.Container>
               <ItemHome title="Portaria" src={imgLobby} link='/lobby' />
               <ItemHome title="Transportes" src={imgTrans} link='/transport' />
            </C.Container>
                User: {state.user.name}<br/>
                Logado: {state.user.logged.toString()}<br/>
                idade: {state.user.age}
        </Container>
    );
}