import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";
import { getDataDetail } from "../actions/userAction";

const mapStateToProps = (state) => {
  return {
    getDataDetail: state.cust.getDataDetail,
    errorDataDetail: state.cust.errorDataDetail,
  };
};

const DetailComponent = (props) => {
  // console.log(props.getDataDetail[0])
  
  // let { getDataDetail } = props.getDataDetail
  
  console.log(props.getDataDetail)
  // Object.assign(dataDetail = {},getDataDetail[0])
  // console.log(dataDetail)
  // const { getDataDetail } = props.getDataDetail[0]
  
  if (props.getDataDetail.gender === "L") {
    props.getDataDetail.gender = "Laki-Laki"
  } else if (props.getDataDetail.gender === "P") {
    props.getDataDetail.gender = "Perempuan"
  }

  if (props.getDataDetail.is_married == 1) {
    props.getDataDetail.is_married = "Menikah"
  } else if (props.getDataDetail.is_married == 0) {
    props.getDataDetail.is_married = "Belum Menikah"
  } 
  
  return (
    <Table stripped>
      <tbody>
        <tr>
          <td width="200">Name</td>
          <td width="10">:</td>
          <td> {props.getDataDetail.name}</td>
        </tr>
        <tr>
          <td width="200">Email</td>
          <td width="10">:</td>
          <td> {props.getDataDetail.email}</td>
        </tr>
        <tr>
          <td width="200">Password</td>
          <td width="10">:</td>
          <td> {props.getDataDetail.password}</td>
        </tr>
        <tr>
          <td width="200">Gender</td>
          <td width="10">:</td>
          <td> {props.getDataDetail.gender}</td>
        </tr>
        <tr>
          <td width="200">Is Married</td>
          <td width="10">:</td>
          <td> {props.getDataDetail.is_married}</td>
        </tr>
        <tr>
          <td width="200">address</td>
          <td width="10">:</td>
          <td> {props.getDataDetail.address}</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default connect(mapStateToProps, null)(DetailComponent);
