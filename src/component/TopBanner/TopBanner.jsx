import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import '../asset/css/custom.css';

class TopBanner extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="topFixedBanner p-0">
          <div className="topBannerOverlay">
            <Container className="topContent">
              <Row>
                <Col className="text-center">
                  <h1 className="topTitle">WORLD WIDE </h1>
                  <h4 className="topSubTitle">GAME CENTER IN THE WORLD </h4>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default TopBanner;
