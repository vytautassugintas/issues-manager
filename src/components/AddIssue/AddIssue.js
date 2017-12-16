import React from "react";
import "./AddIssue.css";
import { Button, Checkbox, Form, TextArea } from "semantic-ui-react";

class AddIssue extends React.Component {
  state = {
    title: undefined,
    description: undefined
  }

  addIssue = (e, { name }) => {
    this.props.onAddIssue({
      title: this.state.title,
      description: this.state.description
    });
    this.setState({
      title: "",
      description: ""
    });
    this.props.history.push("issues")
  };

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  render() {
    return (
      <div>
        <Form>
          <Form.Field>
            <input
              onChange={this.handleChange}
              name="title"
              placeholder="Title"
            />
          </Form.Field>
          <Form.Field>
            <TextArea
              onChange={this.handleChange}
              name="description"
              placeholder="Description"
              style={{ minHeight: 100 }}
            />
          </Form.Field>
          <Button onClick={this.addIssue} primary type="submit">
            Add Issue
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddIssue;
