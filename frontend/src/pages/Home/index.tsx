import { Link } from 'react-router-dom';
import './style'
export const Home = () => {
    return (
        <div>
            Home<br />
            <Link to='/sopa'>Voltar</Link>
        </div>
    );
}