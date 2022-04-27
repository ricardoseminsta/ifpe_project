import React from 'react';
import './App.css'

import { MainRoutes } from './routes/MainRoutes'

//import { useDispatch } from 'react-redux';
//import { useAppSelector } from './redux/hooks/useAppSelector'

//import { setAge, setName } from './redux/reducers/userReducer'
//import { setThemeStatus, setClass } from './redux/reducers/themeReducer'

function App() {
  
  return (
    <div>
      <h1>inicio</h1>
      <MainRoutes />
    </div>
  );
}

export default App;

