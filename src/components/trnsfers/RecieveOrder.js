import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Input, Typography, Button } from "antd";

class RecieveOrder extends Component {
  render() {
    const { Title } = Typography
    const {items } = this.props.recieveItem;
     return (
      <div>
        {items.map(item => {
          return <h1>{ item.name }, { item.qty} </h1>
        })}
        <Row>
          <Col span={16}>
            <Title>Recieve Transfer</Title>
          </Col>
          <Col span={6}>
            <Button>Recieve Transfer</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  recieveItem:state.transfer
})

export default connect(mapStateToProps, null)(RecieveOrder);
