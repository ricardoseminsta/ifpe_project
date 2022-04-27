import { Link } from 'react-router-dom';
import './style'
export const NotFound = () => {
    return (
        <div>
            Pagina não encontrada<br />
            <Link to='/'>Voltar</Link>
        </div>
        
    );
}