import React from "react";
import "./IssuesPanel.css";
import Issue from "../Issue";
import { List } from "semantic-ui-react";

class IssuesPanel extends React.Component {
  render() {
    const issues = this.props.issues.map(issue => {
      return <Issue key={issue.id} issue={issue} />;
    });

    return (
      <div>
        <h2>IssuesPanel ({issues.length})</h2>
        <span>Open {issues.length}</span>
        <span style={{paddingLeft: 8}}>Closed 0</span>
        <List selection divided relaxed>{issues}</List>
      </div>
    );
  }
}

export default IssuesPanel;
