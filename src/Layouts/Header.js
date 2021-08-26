import React from 'react'
import { Row, Col } from "react-bootstrap";

export const Header = () => {
  
  return (
    <>
      <div className="header-main">
        <Row>
          <Col>
            <div className="brand-logo">
              <a href="abc"><img src={require("../Images/logo.png").default} alt="Archive Logo" /></a>
            </div>
        </Col>
        <Col md="auto">
          <div class="d-flex">
            <form class="app-search d-none d-lg-block">
              <div class="position-relative">
                <input type="text" class="form-control" placeholder="Search..." />
                <span><i className="ri-search-line"></i></span>
                </div>
            </form>
            <div className="notification-dropdown">
              <div className="notification-icon"><i className="ri-notification-3-line"></i></div>
              <span>3</span>
            </div>
            <div className="header-user-dropdown">
              <div className="user-icon"><i className="ri-user-fill"></i></div>
            </div>
          </div>
          
        </Col>
        </Row>
      </div>
    </>
  )
}
