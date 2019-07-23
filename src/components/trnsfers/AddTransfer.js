import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Input, Typography, Button, Modal, Checkbox } from "antd";

class AddTransfer extends Component {
  state = {
    searchedItem: "",
    visible: false,
    checkedList: []
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  onChangeModal = e => {
    const { products } = this.props.product;
    const { checkedList } = this.state;

    const checkedItem = e.target.value;
    products.map(item => {
      if (checkedItem === item.name) {
        checkedList.push(item);
      }
    });

    console.log(`checked = ${e.target.value}`);
  };
  

  search = evt => {
    const text = evt.target.value;
    const { products } = this.props.product;
    const result = products.filter(item => {
      const lowerItem = item.name.toLowerCase();
      const lowerText = text.toLowerCase();
      return lowerItem.substring(0, lowerText.length).indexOf(lowerText) !== -1;
    });
    this.setState({ result, text });
    console.log(result);
  };

  render() {
    console.log("state is....", this.state);
    const { Title, Text } = Typography;
    const { products } = this.props.product;
    const { result, text, checkedList, visible } = this.state;
    const productsToSeach = text ? result : products;
    return (
      <div>
        <Row>
          <Col span={18}>
            <Title>Add Transfer</Title>
          </Col>
        </Row>
        <Row type="flex" justify="start">
          <Col span={12} offset={4}>
            <Input type="text" placeholder = "search product" onClick={this.showModal} />
          </Col>
          <Col span={2}>
            <Button type="primary" onClick={this.showModal}>
              Browse product
            </Button>
          </Col>
        </Row>

        
       { /* Model Start from here */}
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Row type="flex" justify="start">
            <Col span={22}>
              <Input
                autoFocus
                type="text"
                placeholder="Search products"
                onChange={this.search}
              />
            </Col>
            {productsToSeach.map(item => {
              return (
                <div>
                  <Row>
                    <Checkbox onChange={this.onChangeModal} value={item.name}>
                      {item.name}
                    </Checkbox>
                  </Row>
                </div>
              );
            })}
          </Row>
        </Modal>
       { /* Model ends here */}

        {checkedList.length && !visible
          ? checkedList.map(item => {
              return (
                <div>
                  <Row type="flex" justify="start">
                    <Col span={12} offset={4}>
                      {item.name}
                    </Col>
                    <Col span={2}>
                      <Input type="text" autoFocus />
                    </Col>
                  </Row>
                </div>
              );
            })
          : null}

          <Button type = "primary">Save </Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  product: state.transfer
});

export default connect(
  mapStateToProps,
  null
)(AddTransfer);
