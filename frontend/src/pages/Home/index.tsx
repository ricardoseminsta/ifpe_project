import { Link } from 'react-router-dom';

import './style'
import { Container } from '../../components/MainComponents'
import { ItemHome } from '../../components/ItemHome';
import * as C from './style'

import imgLobby from '../../assets/img/svg/undraw_profile_details_re_ch9r.svg'
import imgTrans from '../../assets/img/svg/undraw_navigator_a479.svg'


export const Home = () => {
    return (
        <Container>
            <C.Container>
               <ItemHome title="Portaria" src={imgLobby} link='/lobby' />
               <ItemHome title="Transportes" src={imgTrans} link='/transport' />
            </C.Container>
        </Container>
    );
}