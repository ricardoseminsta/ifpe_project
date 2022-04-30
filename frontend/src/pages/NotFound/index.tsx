import { Link } from 'react-router-dom';

import './style'
import { Container } from '../../components/MainComponents'
import * as C from './style'

import  imgNotFound  from '../../assets/img/svg/undraw_page_not_found_re_e9o6.svg'


export const NotFound = () => {
    return (
        <Container>
            <C.Container>
            Pagina não encontrada.
            <img src={imgNotFound} alt="Página Não encontrada" />
            <Link to='/'>Voltar ao Inicio</Link>
            </C.Container>
        </Container>        
    );
}