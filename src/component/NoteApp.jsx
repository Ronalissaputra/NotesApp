import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import NoteNav from './NoteNav';
import HomePage from '../pages/HomePage';
import AddPage from '../pages/AddPage';

function NoteApp() {
  return(
    <div className="Note-app">
        <NoteNav />
      <main>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddPage />} />
      </Routes>
      </main>
    </div>
  )
}

  export default NoteApp;