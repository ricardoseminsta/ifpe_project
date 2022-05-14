import { useRoutes } from "react-router-dom";

import { Home } from '../pages/Home';
import { NotFound } from "../pages/NotFound";
import { Lobby } from "../pages/Lobby";
import { Transport } from "../pages/Transport";
import { SignIn } from "../pages/SignIn";

export const MainRoutes = () => {
    return useRoutes([
        { path: '/signin', element: <SignIn />},
        { path: '/', element: <Home />},
        { path: '/lobby', element: <Lobby />},
        { path: '/transport', element: <Transport />},
        { path: '*', element: <NotFound />}
    ]);        
}   