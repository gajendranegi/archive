import React from 'react';
import { Card, Button } from "react-bootstrap";


export const RecentActivities = () => {

  const activities = [
    {
      description: 'Responded to need "Volunteer Activities"',
      date: "Aug 20"
    },
    {
      description: 'Responded to need "Volunteer Activities"',
      date: "Aug 20"
    },
    {
      description: 'Responded to need "Volunteer Activities"',
      date: "Aug 20"
    },
    {
      description: 'Responded to need "Volunteer Activities"',
      date: "Aug 20"
    },
    {
      description: 'Responded to need "Volunteer Activities"',
      date: "Aug 20"
    },
    
    
  ]
  return (
    <React.Fragment>
        <Card>
          <Card.Body>
            <div className="recent-activities">
              <div className="card-title">
                <h3>Recent Activity Feed </h3>
              </div>
            
              <ul>
                {activities.map(item => (
                <li>
                  <div className="activity-date">{item.date}</div>
                  <div>{item.description}</div>
                </li>   
                ))}             
              </ul>
              <div className="mt-3 text-center">
                <Button variant="primary"><i class="ri-loader-4-fill"></i><span> Load More</span></Button>
              </div>
            </div>
          </Card.Body>
        </Card>
    </React.Fragment>
  )
}