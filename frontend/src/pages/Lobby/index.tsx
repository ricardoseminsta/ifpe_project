import { LobbyArea } from './style'

import { Container } from '../../components/MainComponents';
import { useState } from 'react';

export const Lobby = () => {
    
    const [disabled, setDisabled] = useState(false);
    const [name, setName] = useState('');
    const [doc, setDoc] = useState('');
    const [phone, setPhone] = useState('');
    const [arrivalTime, setArrivalTime] = useState('');

    const setZero = (number: number) => {
        if(number < 0) {
            return `0${number}`;
        }
    }

    const formatDate = () => {
        let cDate = new Date();

        let months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
        let cDay = cDate.getDate();
        let cMonth = cDate.getMonth();
        let cYear = cDate.getFullYear();

        return `${cDay} de ${months[cMonth]} de ${cYear}`;
    }

    return(
        <Container>
            <LobbyArea>
                <form >
                <label className="area">
                        <div className="area--title">Nome:</div>
                        <div className="area--input">
                            <input
                                type="text"
                                disabled={disabled}
                                value={name}
                                onChange={e => setName(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Doocumento<br />de Identificação:</div>
                        <div className="area--input">
                            <input
                                type="text"
                                disabled={disabled}
                                value={doc}
                                onChange={e => setDoc(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Telefone:</div>
                        <div className="area--input">
                            <input
                                type="text"
                                disabled={disabled}
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Hora Entrada:</div>
                        <div className="area--input">
                        <input
                                type="date"
                                disabled={!disabled}
                                value={arrivalTime}
                                required
                            />
                        </div>
                    </label>
                </form>
            </LobbyArea>
        </Container>
    );
}