import React from "react";
import styles from "./Issue.css";
import { List, Icon } from "semantic-ui-react";

class Issue extends React.Component {
  render() {
    const { issue } = this.props;
    return (
      <List.Item>
        <List.Icon name="github" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header as="h3">
            #{issue.id} {issue.title}
          </List.Header>
          <List.Description as="a">{issue.createdAt}</List.Description>
        </List.Content>
      </List.Item>
    );
  }
}

export default Issue;
