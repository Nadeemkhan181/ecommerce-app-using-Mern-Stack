import React, {useState, useEffect} from 'react'

import { isAutheticated } from "../auth/helper";
import { getallorders } from "../core/helper/orderHelper";
import Card from '../core/Card';
import Base from '../core/Base';


const Myorders = () => {


const {user : {name, _id}} = isAutheticated();

const [orders, setOrders] = useState([]);
const [error, setError] = useState(false);





const getorder = (userId) => {
getallorders(userId).then(data => {
  if (data.error) {
    setError(data.error);
  } else {
    setOrders(data);
  }
});
}


useEffect(() => {
    getorder();
  }, []);
  

    return (
        <Base>
        
          <div className="row text-center">
        <div className="row">
          {orders.map((order, index) => {
            return (
              <div key={index} className="col-4 mb-4">
                <Card product={order} />
              </div>
            );
          })}
        </div>
      </div>
        </Base>
    )
}

export default Myorders;