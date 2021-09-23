import React from 'react';
import './App.css';

function Reviews () {
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
          <div key={itemReviews.id} className="Item">
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

export default Reviews;