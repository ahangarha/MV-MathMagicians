import React from 'react';
import Calculator from './components/Calculator';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main id="tabs">
        <Calculator />
      </main>
      <Footer />
    </>
  );
}
