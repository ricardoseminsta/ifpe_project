import { LobbyArea, VisitArea } from './style'
import { visits } from '../../helpers/visits';
import { Container } from '../../components/MainComponents';
import { useState } from 'react';

export const Lobby = () => {
    
    const [disabled, setDisabled] = useState<boolean>(false);
    const [name, setName] = useState<String>('');
    const [doc, setDoc] = useState<String>('');
    const [phone, setPhone] = useState<String>('');
    const [arrivalTime, setArrivalTime] = useState<String>('');
    const [exitTime, setExitTime] = useState<String>('');
    const [sector, setSector] = useState<String>('');
    const [doorman, setDoorman] = useState<String>('');
    const [obs, setObs] = useState<String>('');

    const handleSubmit = () => {
        alert('pegou');
        
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
                                value={name.toString()}
                                onChange={e => setName(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Documento de Identificação:</div>
                        <div className="area--input">
                            <input
                                type="text"
                                disabled={disabled}
                                value={doc.toString()}
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
                                value={phone.toString()}
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
                                disabled={disabled}
                                value={arrivalTime.toString()}
                                onChange={e => setArrivalTime(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Hora Saída:</div>
                        <div className="area--input">
                        <input
                                type="date"
                                disabled={disabled}
                                value={exitTime.toString()}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Setor de Destino:</div>
                        <div className="area--input">
                        <input
                                type="text"
                                disabled={disabled}
                                value={sector.toString()}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Porteiro Responsavel:</div>
                        <div className="area--input">
                        <input
                                type="text"
                                disabled={disabled}
                                value={doorman.toString()}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Observações:</div>
                        <div className="area--input">
                            <input
                                type="text"
                                disabled={disabled}
                                value={obs.toString()}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={disabled} onClick={handleSubmit}>Cadastrar Visitante</button>
                        </div>
                    </label>
                </form>
                <VisitArea>
                    <table>
                        <tr>
                            <th>Nome</th>
                            <th>Documento de Identificação</th>
                            <th>Telefone</th>
                            <th>Hora Entrada</th>
                            <th>Hora Saída</th>
                            <th>Setor de Destino</th>
                            <th>Porteiro Responsavel</th>
                            <th>Observações</th>
                        </tr>
                        {visits.map((item, index) => (
                            <tr className="itemVisit" key={index}>
                                <td>{item.name}</td>
                                <td>{item.doc}</td>
                                <td>{item.phone}</td>
                                <td>{item.arrivalTime}</td>
                                <td>{item.exitTime}</td>
                                <td>{item.sector}</td>
                                <td>{item.doorman}</td>
                                <td>{item.obs}</td>
                            </tr>
                        ))}

                    </table>
                </VisitArea>
            </LobbyArea>
        </Container>
    );
}