import React from 'react';
import { Container, Row, Col, Badge, Card } from "react-bootstrap";

export const Metric = () => {

  const metrics = [
    {
      title: "Order",
      value: "1,587",
      period: "From previous period",
      percentValue: "+11%",
      icon: <i className="ri-file-list-3-fill"></i>,
    },
    {
      title: "Revenue",
      value: "$46,782",
      period: "From previous period",
      percentValue: "+11%",
      icon: <i class="ri-stack-fill"></i>,
    },
    {
      title: "Average Price",
      value: "$15.9",
      period: "From previous period",
      percentValue: "+11%",
      icon: <i class="ri-price-tag-3-fill"></i>,
    },
    {
      title: "Product Solid",
      value: "1890",
      period: "From previous period",
      percentValue: "+11%",
      icon:<i class="ri-briefcase-fill"></i>,
    },
  ]
  return (
    <React.Fragment>
      <Row>
      {metrics.map(item => (
        <Col md="3">
          <Card>
            <Card.Body>
              <div className="matric-main-col">
                <div className="matric-inner-box">
                    <h6>{item.title}</h6>
                    <h4>{item.value}</h4>   
                    <p><Badge>{item.percentValue}</Badge> {item.period}</p>    
                    <span className="metric-icon">{item.icon}</span>     
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        ))}
      </Row>
    </React.Fragment>
  )
}