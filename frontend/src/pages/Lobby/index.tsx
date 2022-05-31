import { LobbyArea, VisitArea } from './style'
import { visits, VisitsType } from '../../helpers/visits';
import { Container } from '../../components/MainComponents';
import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../../contexts/Context'
import axios from "axios";

export const Lobby = () => {
    const {state, dispatch} = useContext(Context);

    const [disabled, setDisabled] = useState<boolean>(false);
    const [name, setName] = useState<String>('');
    const [doc, setDoc] = useState<String>('');
    const [phone, setPhone] = useState<String>('');
    const [arrivalTime, setArrivalTime] = useState<String>('');
    const [exitTime, setExitTime] = useState<String>('');
    const [sector, setSector] = useState<String>('');
    const [doorman, setDoorman] = useState<String>('');
    const [obs, setObs] = useState<String>('');
    const [listVisits, setListVisits] = useState<VisitsType[]>([]);
    
    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let tpmVitists: VisitsType  = {name , doc, phone, arrivalTime, exitTime, sector, doorman, obs};
        
        //let tpmVitists: VisitsType[] = [...visits]
        visits.push(tpmVitists);
        let copyVisits = [...visits];
        setListVisits(copyVisits);
        //axios.post('https://sheet.best/api/sheets/817ff436-dbaa-4ebb-999f-efe65d82ad87', visitForm)
        // .then(response => {console.log(response.data);})
       
    }

    const getVisits = async () => {
        let res = await axios.get('https://sheet.best/api/sheets/817ff436-dbaa-4ebb-999f-efe65d82ad87');

        console.log(res.data[0].name);

        for (let i = 0; i < res.data.length; i++) {

        }

    }
    
    useEffect(()=>{
       setListVisits(visits);
    }, []);

    return(
        <Container>
            <LobbyArea>
                    User: {state.user.name}<br/>
                    Logado: {state.user.logged.toString()}<br/>
                    idade: {state.user.age}
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
                                onChange={e => setExitTime(e.target.value)}
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
                                onChange={e => setSector(e.target.value)}
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
                                onChange={e => setDoorman(e.target.value)}
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
                                onChange={e => setObs(e.target.value)}
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
                        <thead>
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
                        </thead>
                        <tbody>
                            {listVisits.map((item, index) => (
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
                        </tbody>
                    </table>
                </VisitArea>
            </LobbyArea>
        </Container>
    );
}