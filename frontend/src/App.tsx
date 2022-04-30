import React from 'react';
import './App.css'

import { MainRoutes } from './routes/MainRoutes'
import { Header } from './components/Header'

//import { useDispatch } from 'react-redux';
//import { useAppSelector } from './redux/hooks/useAppSelector'

//import { setAge, setName } from './redux/reducers/userReducer'
//import { setThemeStatus, setClass } from './redux/reducers/themeReducer'

function App() {
  
  return (
    <div>
      <Header />
      <MainRoutes />
    </div>
  );
}

export default App;

