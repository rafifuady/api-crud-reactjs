import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import { connect } from "react-redux";
import FormComponent from "../components/FormComponent";
import { getDataDetail, putDataUpdate } from "../actions/userAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponData: state.cust.getResponData,
    errorResponData: state.cust.errorResponData,
  };
};

class EditUserContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getDataDetail(this.props.match.params.id));
  }

  handleSubmit(data) {
    this.props.dispatch(putDataUpdate(data, this.props.match.params.id));
  }

  render() {
    if (this.props.getResponData || this.props.errorResponData) {
      if (this.props.errorResponData) {
        swal("Failed!", this.props.errorResponData, "error");
      } else {
        swal(
          "User Updated!",
          "Nama : " +
            this.props.getResponData.name +
          
          "success"
        );
      }
    }
    return (
      <Container>
        <BackComponent />
        <h1>Edit User</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(EditUserContainer);
