import React from 'react';
import "./dashboard.scss";
import { Container, Row, Col } from "react-bootstrap";
import {Metric} from "../Components/Pages/Dashboard/Metric"
import { LatestOrder } from '../Components/Pages/Dashboard/LatestOrder';
import { RecentActivities } from '../Components/Pages/Dashboard/RecentActivities';

export const Dashboard = () => {
  
  return (
    <React.Fragment>
      <Metric/>
      <Row>
        <Col md="8">
          <LatestOrder/>
        </Col>
        <Col md="4">
          <RecentActivities/>
        </Col>
      </Row>
    </React.Fragment>
  )
};