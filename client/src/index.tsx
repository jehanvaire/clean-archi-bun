import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Clients from './components/Clients';
import Produits from './components/Produits';
import Factures from './components/Factures';
import Header from './components/Header/Header';


import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(

<React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/clients" element={<Clients />} />
        <Route path="/produits" element={<Produits />} />
        <Route path="/factures" element={<Factures />} />
      </Routes>
    </Router>
  </React.StrictMode>,

);