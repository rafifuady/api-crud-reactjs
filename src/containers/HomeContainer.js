import React, { Component } from "react";
import TableComponent from "../components/TableComponent";
import { connect } from "react-redux";
import { getDataList, deleteData } from '../actions/userAction'

class HomeContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getDataList());
    this.props.dispatch(deleteData());
  }

  render() {
    
    return (
      <div>
        <TableComponent />
      </div>
    );
  }
}

export default connect()(HomeContainer);
