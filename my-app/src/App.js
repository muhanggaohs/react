import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Parentbox">
      <ProductFoto />
      <ProductInfo isDiscount="yes" name="Air Jordan" category="HYPE" />
      <ProductReviews />

      
    </div>
  );
}

function ProductReviews () {
//  prepare Data dummy JSON
const users = [
   {
     "id": 1,
     "name": "Takamichi",
     "review": "GGWP !!!!",
     "pic": "https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
   },
   {
     "id": 2,
     "name": "Draken",
     "review": "GGWP !!!!",
     "pic": "https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
   },
   {
     "id": 3,
     "name": "Mikey",
     "review": "GGWP !!!!",
     "pic": "https://images.pexels.com/photos/3283568/pexels-photo-3283568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
   }
  ];
  const listReviews = users.map((itemReviews) =>
      <div className="Item">
        <img src={itemReviews.pic} />
        <div className="User">
          <h3>{itemReviews.name}</h3>
          <p>{itemReviews.review}</p>
        </div>
      </div>
    );
    return (
      <div className="Review-box">
        <h2>Reviews</h2>
        {listReviews}
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
  const benefits = ["Water Resistance", "Limited", "Eye Catching"];
  const listBenefits = benefits.map((itemBenefits) =>
      <li>{itemBenefits}f</li>
    );
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
        <ul>
          <li>{listBenefits}</li>
        </ul>
        <a onClick={(e) => AddCart(title, e)} href="#">Add to Cart</a>
      </div>  
    </div>
  );
}

function AddCart(e){
  return console.log("Add (" + e + ")");
}

export default App;
