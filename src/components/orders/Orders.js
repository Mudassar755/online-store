import React, { Component } from "react";
import { connect } from "react-redux";
import { DatePicker, Row, Col, Typography, Select, Button } from "antd";
import moment from "moment";

class Orders extends Component {
  state = {
    dateFrom: "",
    dateTo: "",
    menu: ""
  };

  handleChange = value => {
    console.log(`selected ${value}`);
    this.setState({ menu: value });
  };
  handleDateFrom = (dumy, value) => {
    console.log(`selected ${value}`);
    this.setState({ dateFrom: value });
  };
  handleDateTo = (dumy, value) => {
    console.log(`selected ${value}`);
    this.setState({ dateTo: value });
  };

  handleSubmit = () => {
    const { products } = this.props.order;
    const { dateFrom, dateTo, ordersList } = this.state;

    let ordersByDate = products.filter(item => {
      let orderedDate = moment(item.orderDate).format("YYYY-MM-DD");

      return (
        orderedDate >= moment(dateFrom).format("YYYY-MM-DD") &&
        orderedDate <= moment(dateTo).format("YYYY-MM-DD")
      );
    });
    this.setState({ ordersByDate });

    let ordersByMonth = products.filter(item => {
      let orderedDate = moment(item.orderDate).format("YYYY-MM");

      return (
        orderedDate >= moment(dateFrom).format("YYYY-MM") &&
        orderedDate <= moment(dateTo).format("YYYY-MM")
      );
    });
    this.setState({ ordersByMonth });

    let ordersByYear = products.filter(item => {
      let orderedDate = moment(item.orderDate).format("YYYY");

      return (
        orderedDate >= moment(dateFrom).format("YYYY") &&
        orderedDate <= moment(dateTo).format("YYYY")
      );
    });
    this.setState({ ordersByYear });
  };
  render() {
    console.log(this.state);
    const { ordersByDate, ordersByMonth, ordersByYear, menu } = this.state;
    const dateFormat = "YYYY-MM-DD";
    const { Title } = Typography;
    const { Option } = Select;
    return (
      <div>
        <Title>Orders</Title>
        <Row>
          <Col span={7}>
            From :{" "}
            <DatePicker
              defaultValue={moment("2019/01/01", dateFormat)}
              format={dateFormat}
              onChange={this.handleDateFrom}
            />
          </Col>
          <Col span={7}>
            To :{" "}
            <DatePicker
              defaultValue={moment("2019/08/01", dateFormat)}
              format={dateFormat}
              onChange={this.handleDateTo}
            />
          </Col>
          <Col span={3}>
            <Select
              defaultValue="Select"
              style={{ width: 120 }}
              onChange={this.handleChange}
            >
              <Option value="day">Day</Option>
              <Option value="month">Month</Option>
              <Option value="year">Year</Option>
            </Select>
          </Col>
          <Col span={3} offset={1}>
            <Button type="primary" onClick={this.handleSubmit}>
              Save
            </Button>
          </Col>
        </Row>
        {menu === "day"
          ? ordersByDate.map(item => {
              return (
                <div>
                  <Row>
                    <Col >{ item.name }</Col>
                  </Row>
                </div>
              );
            })
          : null}
           {menu === "month"
          ? ordersByMonth.map(item => {
              return (
                <div>
                  <Row>
                    <Col >{ item.name }</Col>
                  </Row>
                </div>
              );
            })
          : null}
           {menu === "year"
          ? ordersByYear.map(item => {
              return (
                <div>
                  <Row>
                    <Col >{ item.name }</Col>
                  </Row>
                </div>
              );
            })
          : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  order: state.transfer
});

export default connect(
  mapStateToProps,
  null
)(Orders);
