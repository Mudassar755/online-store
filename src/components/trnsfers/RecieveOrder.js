import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Input, Typography, Button } from "antd";

class RecieveOrder extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={16}>
            <Title>Transfer</Title>
          </Col>
          <Col span={6}>
            <Button>Recieve Transfer</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect()(RecieveOrder);
