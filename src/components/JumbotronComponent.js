import React from "react";
import { Jumbotron, Button, Container } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    title: state.cust.title
  }
}

const JumbotronComponent = (props) => {
  return (
    <div>
      <Jumbotron>
        <Container>
          <h1 className="display-3">{props.title}</h1>
          <p className="lead">
            Simple CRUD Apps
          </p>
          <hr className="my-2" />
          
        </Container>
      </Jumbotron>
    </div>
  );
};

export default connect(mapStateToProps, null)(JumbotronComponent);
