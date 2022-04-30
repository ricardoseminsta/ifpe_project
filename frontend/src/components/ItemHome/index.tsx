import { Link } from "react-router-dom";
import { ItemHomeType } from "../../types/ItemHomeType"
import * as C from './style'

type Props = {
    link: string;
    title: string;
    src: string;
}

export const ItemHome = ({ link, title, src }: Props) => {
    return(
        <C.ItemHome>
            <Link to={link}>
                <h2>{title}</h2>
                <img src={src} alt={title} />
            </Link>
        </C.ItemHome>
    );
}