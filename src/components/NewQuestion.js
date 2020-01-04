import React, { Component, Fragment } from "react";
import { Form, Input, Button } from "semantic-ui-react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { connect } from "react-redux";

import { handleSaveQuestion } from "../actions/questions";
import NavBar from "./NavBar";

/* STYLED COMPONENTS */

const NewQuestionContainer = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 70px;
  border: solid #e03997 1px;
  padding: 30px 20px 40px 20px;
  border-radius: 4px;
  text-align: center;
`;

const Or = styled.div`
  border-radius: 50%;
  width: 36px;
  height: 36px;
  padding: 8px;
  background-color: #e03997;
  color: white;
  text-align: center;
  font-weight: bold;
  align-self: center;
`;

const Container = styled.div`
  display: flex;
  height: 200px;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  margin: auto;
`;

class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const { optionOne, optionTwo } = this.state;
    const { handleSaveQuestion, authUser } = this.props;
    handleSaveQuestion(optionOne, optionTwo, authUser);
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { optionOne, optionTwo } = this.state;
    console.log(this.props);
    return (
      <Fragment>
        <NavBar />
        <NewQuestionContainer>
          <h2 css={{ marginBottom: `40px`, color: `#e03997` }}>
            Would you rather...
          </h2>
          <Form onSubmit={this.handleSubmit}>
            <Container>
              <Input
                value={optionOne}
                name="optionOne"
                placeholder="Your first option... "
                fluid
                onChange={this.handleChange}
              />
              <Or>OR</Or>
              <Input
                value={optionTwo}
                name="optionTwo"
                placeholder="Your second option... "
                fluid
                onChange={this.handleChange}
              />
              <Button fluid content="Add new question" type="submit" />
            </Container>
          </Form>
        </NewQuestionContainer>
      </Fragment>
    );
  }
}

function mapStateToProps({ authUser }) {
  return {
    authUser
  };
}

export default connect(
  mapStateToProps,
  { handleSaveQuestion }
)(NewQuestion);