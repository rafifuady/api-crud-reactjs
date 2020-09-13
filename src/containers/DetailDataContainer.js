import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import { connect } from "react-redux";
import { getDataDetail } from "../actions/userAction";
import DetailComponent from "../components/DetailComponent";

class DetailDataContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getDataDetail(this.props.match.params.id))
    console.log(this.props)
  }

  render() {
    return (
      <Container>
        <BackComponent />
        <h1>Detail User</h1>
        <DetailComponent />
      </Container>
    )
  }
}

export default connect()(DetailDataContainer);
