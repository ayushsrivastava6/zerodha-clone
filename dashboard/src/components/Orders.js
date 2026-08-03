import React, {useState,useEffect} from "react";

import axios from 'axios';

const Orders = () => {
  const [allOrders,setAllOrders]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:3002/allOrders').then((res)=>{
      console.log(res.data);
      setAllOrders(res.data);
    })
  },[])
  return (
    <>
    <div>
      {allOrders.length === 0 ? (
        <div>
          <p>You haven't placed any orders today</p>
        </div>
      ) : (
        <div>
          <h3 className="title">Orders ({allOrders.length})</h3>
          <div className="ord-table">
          <table className="order-table">
            <thead>

              <tr>
                <th>Name</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Mode</th>
              </tr>
            </thead>

            <tbody>
              {allOrders.map((order,index) => (
                <tr key={order._id}>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>{order.price}</td>
                  <td>{order.mode}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      )}
    </div>
  </>
  );
};

export default Orders;