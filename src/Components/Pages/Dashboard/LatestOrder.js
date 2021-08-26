import React from 'react';
import { Card } from "react-bootstrap";

import { Paginations } from '../../Paginations/Pagination';

export const LatestOrder = () => {

  const orders = [
    {
      userImage: <img src={require("../../../Images/profile.png").default} alt="Profile" />,
      name: "Mathias N. Klausen",
      status: "Confirm",
      amount: "$14,584",
      date: "5/12/2016",
    },
    {
      userImage: <img src={require("../../../Images/profile-female.png").default} alt="Profile" />,
      name: "Herbert C. Patton",
      status: " Waiting payment	",
      amount: "$8,541",
      date: "10/11/2016",
    },
    {
      userImage: <img src={require("../../../Images/profile.png").default} alt="Profile" />,
      name: "Mathias N. Klausen",
      status: "Confirm",
      amount: "$14,584",
      date: "5/12/2016",
    },
    {
      userImage: <img src={require("../../../Images/profile-female.png").default} alt="Profile" />,
      name: "Herbert C. Patton",
      status: "Payment expired",
      amount: "$8,541",
      date: "10/11/2016",
    },
    {
      userImage: <img src={require("../../../Images/profile.png").default} alt="Profile" />,
      name: "Mathias N. Klausen",
      status: "Confirm",
      amount: "$14,584",
      date: "5/12/2016",
    },
    {
      userImage: <img src={require("../../../Images/profile-female.png").default} alt="Profile" />,
      name: "Herbert C. Patton",
      status: "Waiting payment	",
      amount: "$8,541",
      date: "10/11/2016",
    },
    
  ]
  return (
    <React.Fragment>
        <Card>
          <Card.Body>
            <div className="card-title">
              <h3>Latest Transactions</h3>
            </div>
            <div className="table-wraper">
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th className="text-center"><i className="ri-apps-line"></i></th>
                      <th>Name</th>
                      <th>Status</th>
                      <th>Amount</th>
                      <th>Date</th>
                      <th><i className="ri-menu-fill"></i></th>
                    </tr>
                  </thead>
                  <tbody>
                  {orders.map(item => (
                    <tr>
                      <td className="text-center"><div className="small-avtar">{item.userImage}</div></td>
                      <td>{item.name}</td>
                      <td>{item.status}</td>
                      <td>{item.amount}</td>
                      <td>{item.date}</td>
                      <td><i className="ri-more-2-fill"></i></td>
                    </tr>
                  ))}
                  </tbody>
                </table>
              </div>
              <Paginations/>
            </div>
          </Card.Body>
        </Card>
    </React.Fragment>
  )
}