import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import FormComponent from "../components/FormComponent";
import { connect } from "react-redux";
import { postDataCreate } from "../actions/userAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponData: state.cust.getResponData,
    errorResponData: state.cust.errorResponData,
  };
};

class CreateDataContainer extends Component {
  handleSubmit(data) {
    this.props.dispatch(postDataCreate(data));
  }

  render() {
    if (this.props.getResponData || this.props.errorResponData) {
      if(this.props.errorResponData)
      {
        swal(
            "Failed!",
            this.props.errorResponData,
            "error"
          );
      }else {
        swal(
            "User Created!",
          );
      }
    }
    return (
      <Container>
        <BackComponent />
        <h1>Create User</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(CreateDataContainer);
