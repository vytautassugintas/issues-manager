import React from "react";
import { connect } from "react-redux";
import { Container, Header, Segment } from "semantic-ui-react";
import IssuesMenu from "../../components/IssuesMenu";
import IssuesPanel from "../../components/IssuesPanel";
import AddIssue from "../../components/AddIssue";
import IssueDetails from "../../components/IssueDetails";
import { addIssue } from "./actions";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from "react-router-dom";

class IssuesPage extends React.Component {
  state = { selectedItem: "issues" };

  handleSelectedMenuItemChange = item => {
    if (this.state.selectedItem !== item.activeItem) {
      this.setState({ selectedItem: item.activeItem });
    }
  };

  handleAddIssue = issue => {
    this.props.dispatch(addIssue(issue));
    this.setState({ selectedItem: "issues" });
  };

  getIssuesPanelCompWithProps = props => (
    <IssuesPanel issues={this.props.issues} {...props} />
  );

  getAddIssueCompWithProps = props => (
    <AddIssue onAddIssue={this.handleAddIssue} {...props} />
  );

  render = () => {
    return (
      <Container style={{ paddingTop: 10 }}>
        <Header as="h2">IssuesPage</Header>
        <Router>
          <div>
            <IssuesMenu
              onSelectedItemChange={this.handleSelectedMenuItemChange}
            />
            <Segment attached="bottom">
              <Route
                path="/issues"
                component={this.getIssuesPanelCompWithProps}
              />
              <Route path="/add" component={this.getAddIssueCompWithProps} />
              <Route path="/issue/:issueId" component={IssueDetails} />
            </Segment>
          </div>
        </Router>
      </Container>
    );
  };
}

const mapStateToProps = state => ({
  issues: state.issuesReducer
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps)(IssuesPage);
