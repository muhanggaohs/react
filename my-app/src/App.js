import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Parentbox">
        <ProductFoto />
        <ProductInfo title="NAME" category="LEBARAN" />
    </div>
  );
}

function  ProductFoto() {
  return (
    <div className="Foto">
        <img src="S1.png" />
      </div>
  );
}

function ProductInfo(props) {
  const { category, title } = props;
  return (
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{title}</h1>
        <p className="Price">IDR 73.309.999</p>
        <p className="Info">
          One of the mosat recognizable shoes in the Nike collection, The Air Unknown features lightweight, visible cushioning just like the original from '88. Signature details and materials celebrate the game-changing icon.
        </p>
      </div>  
    </div>
  );
}

export default App;
