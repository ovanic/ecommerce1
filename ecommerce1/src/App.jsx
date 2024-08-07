import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navibar from './components/NaviBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import './App.css';

function App() {
  return (
    <Router>
      <Navibar />
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} /> {}
        </Routes>
      </main>
    </Router>
  );
}

export default App;

