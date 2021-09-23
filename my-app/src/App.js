import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Parentbox">
        <ProductFoto />
        <ProductInfo isDiscount="coming" title="Air Jordan" category="LEBARAN" />
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

function CheckDiscount(props) {
  const { isDiscount } = props;
  if (isDiscount == "yes") {
    return (
      <p>Diskon 50% Off</p>
    );
  }
  else if (isDiscount == "coming") {
    return (
      <p>Soon</p>
    );
  }
  else {
    return (
      <p>No Discount !</p>
    );
  }
}

function ProductInfo(props) {
  const { category, title, isDiscount } = props;
  return (
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{title}</h1>
        <p className="Price">IDR 73.309.999</p>
        <CheckDiscount isDiscount={isDiscount} />
        <p className="Info">
          One of the mosat recognizable shoes in the Nike collection, The Air Unknown features lightweight, visible cushioning just like the original from '88. Signature details and materials celebrate the game-changing icon.
        </p>
        <a onClick={(e) => AddCart(title, e)} href="#">Add to Cart</a>
      </div>  
    </div>
  );
}

function AddCart(e){
  return console.log("Add (" + e + ")");
}

export default App;
