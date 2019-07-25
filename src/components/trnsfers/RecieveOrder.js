import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Input, Typography, Button } from "antd";
import { Link } from 'react-router-dom'
import { recieve_transfer } from '../../Redux/Actions/transferActions'

class RecieveOrder extends Component {

  onRecieve = () => {
    const { orderedItems } = this.props.recieveItem;
this.props.recieve_transfer(orderedItems);
    
  }
  render() {
    const { Title } = Typography
    const { orderedItems } = this.props.recieveItem;
    return (
      <div>

        <Row>
          <Col span={16}>
            <Title>Recieve Transfer</Title>
          </Col>
        </Row>
        {orderedItems.length ? orderedItems.map(item => {
          return (
            <div>
              <Row>
                <Col span={12}>
                  <Title level={4}>{item.name} </Title>
                </Col>
                <Col span={2}>
                  <Input value={item.qty} />
                </Col>
              </Row>
            </div>)
        }) : null}
        <Row>
          <Col span={6} offset = {12}>
            <Link to = '/recieve/1' ><Button onClick = { this.onRecieve }>Recieve Transfer</Button></Link>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  recieveItem: state.transfer
})

export default connect(mapStateToProps, { recieve_transfer })(RecieveOrder);
