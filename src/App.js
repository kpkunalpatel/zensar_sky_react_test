import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import SelectedLaunch from './components/selectedLaunch';
import Landing from './landing';

function App() {

  return (
    <HashRouter>
        <Routes>
						<Route path='/' exact element={<Landing />} />
						<Route path='/selectedLaunch' exact element={<SelectedLaunch />} />
        </Routes>
		</HashRouter>
  );
}

export default App;
