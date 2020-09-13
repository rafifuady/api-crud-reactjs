import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { FormGroup, Col, Label, Input, Row, Button } from "reactstrap";
import DataValidation from "../validations/DataValidation";


const renderField = ({
  input,
  type,
  placeholder,
  label,
  disabled,
  readOnly,
  meta: { touched, error, warning },
}) => (
  <Row>
    <Col md="12">
      <Label htmlFor="{input}" className="col-form-label">
        {label}
      </Label>
    </Col>
    <Col md="12">
      <Input
        {...input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
      ></Input>
      {touched &&
        ((error && <p style={{ color: "red" }}>{error}</p>) ||
          (warning && <p style={{ color: "brown" }}>{warning}</p>))}
    </Col>
  </Row>
);
const mapStateToProps = (state) => {
  return {
    initialValues : {
      name : state.cust.getDataDetail.name,
      email : state.cust.getDataDetail.email,
      password : state.cust.getDataDetail.password,
      gender : state.cust.getDataDetail.gender,
      is_married : state.cust.getDataDetail.is_married,
      address : state.cust.getDataDetail.address,
      deleted : state.cust.getDataDetail.deleted,
    }
  };
};

class FormComponent extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup row>
        <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="name"
                component={renderField}
                label="Name :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="email"
                component={renderField}
                label="Email :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="password"
                name="password"
                component={renderField}
                label="Password :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="gender"
                component={renderField}
                label="Gender : (L/P)"
              >
              </Field>
            </FormGroup>
          </Col><Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="is_married"
                component={renderField}
                label="Is Married :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="address"
                component={renderField}
                label="address : "
              />
            </FormGroup>
          </Col>
          
        </FormGroup>

        <FormGroup row>
          <Col md="12">
            <FormGroup>
              <Button
                color="dark"
                type="submit"
                disabled={this.props.submitting}
              >
                Submit
              </Button>
            </FormGroup>
          </Col>
        </FormGroup>
      </form>
    );
  }
}

FormComponent = reduxForm({
  form: "formCreateUser",
  validate: DataValidation,
  enableReinitialize: true,
})(FormComponent);
export default connect(mapStateToProps, null)(FormComponent);
