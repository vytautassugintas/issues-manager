import React from "react";
import "./IssueDetails.css";
import moment from "moment";
import { Redirect } from "react-router-dom";
import { Header } from "semantic-ui-react";

class IssueDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIssue: props.issues.find(
        issue => issue.id === parseInt(props.match.params.issueId)
      )
    };
  }

  render() {
    const { selectedIssue } = this.state;

    if (!selectedIssue) {
      return <Redirect to="/issues" />;
    }

    return (
      <div>
        <Header as="h2">
          {selectedIssue.title}{" "}
          <span style={{ color: "lightgrey" }}>#{selectedIssue.id}</span>
          <Header.Subheader>
            {moment(selectedIssue.createdAt).fromNow()}
          </Header.Subheader>
        </Header>
      </div>
    );
  }
}

export default IssueDetails;
