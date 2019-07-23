import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Input, Typography, Button } from "antd";

class Transfers extends Component {
  render() {
    const { Title } = Typography;
    return (
      <div>
        <Row>
          <Col span={16}>
            <Title>Transfer</Title>
          </Col>
          <Col span={6}>
            <Link to = '/transfers/new'><Button>Add Transfer</Button></Link>
          </Col>
        </Row>
        <Row>
          <Col span={16}>
            <Input type="text" />
          </Col>
          
        </Row>
      </div>
    );
  }
}

export default connect()(Transfers);
