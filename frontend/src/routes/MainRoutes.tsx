import { useRoutes } from "react-router-dom";

import { Home } from '../pages/Home';
import { NotFound } from "../pages/NotFound";
import { Lobby } from "../pages/Lobby";

export const MainRoutes = () => {
    return useRoutes([
        { path: '/', element: <Home />},
        { path: '/lobby', element: <Lobby />},
        { path: '*', element: <NotFound />}
    ]);        
}   