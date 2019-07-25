import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Input, Typography, Button } from "antd";

class Transfers extends Component {
  render() {
    const { Title, Text } = Typography;
    const { transfers } = this.props.transfer
    return (
      <div>
        <Row>
          <Col span={16}>
            <Title>Transfer</Title>
          </Col>
          <Col span={6}>
            <Link to='/transfers/new'><Button>Add Transfer</Button></Link>
          </Col>
        </Row>
        <Row>
          <Col span={16}>
            <Input type="text" />
          </Col>

        </Row>
        {transfers.map(item => {
          return (
            <div>
              <Row>
                <Col><Text>{item.id}</Text> </Col>
                <Col><Text>{item.id}</Text> </Col>
              </Row>
            </div>
          )
        })

        }

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  transfer: state.transfer
})

export default connect(mapStateToProps, null)(Transfers);
