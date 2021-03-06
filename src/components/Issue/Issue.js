import React from "react";
import "./Issue.css";
import moment from "moment";
import { List } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Issue extends React.Component {
  render() {
    const { issue } = this.props;
    return (
      <List.Item>
        <List.Icon name="github" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header as="h3">
          <Link to={`/issue/${issue.id}`}>#{issue.id} </Link>
            {issue.title}
          </List.Header>
          <List.Description as="a">{moment(issue.createdAt).fromNow()}</List.Description>
        </List.Content>
      </List.Item>
    );
  }
}

export default Issue;
