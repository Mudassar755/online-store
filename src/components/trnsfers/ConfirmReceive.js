import React, { Component } from 'react'
import  { connect } from 'react-redux'
import { Row, Col, InputNumber, Typography, Button, Progress } from "antd";
import { show_transfer } from '../../Redux/Actions/transferActions'


 class ConfirmReceive extends Component {
     state = {
         value: 0
     }

     onChange = (value) => {
        console.log('changed', value);
        this.setState({value})
      }

      onSaveTransfer = () => {
        const { receivedItems } = this.props.order;
         this.props.show_transfer( receivedItems )
      }

     render() {
        const { receivedItems } = this.props.order;
        const { Title ,Text} = Typography
        return (
            <div>
                <Row>
                    <Col span = {12}><Title>Receive Orders</Title></Col>
                </Row>
                { receivedItems.map(item => {
                    return (
                        <div>
                         <Row>
                             <Col span = {12}> { item.id}</Col>
                             <Col span = {3}><Progress percent={this.state.value * 10} size="small" />0 0f {item.qty}</Col>
                             <Col span = {3}><InputNumber min={0} max={item.qty} onChange={this.onChange} /></Col>
                         </Row>
                        </div>
                    )
                })}
                <Button>Cancel</Button>
                <Button onClick = { this.onSaveTransfer }>Save</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    order: state.transfer
})

export default connect(mapStateToProps, { show_transfer })(ConfirmReceive)
