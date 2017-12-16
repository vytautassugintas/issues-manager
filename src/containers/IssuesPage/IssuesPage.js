import React from "react";
import { connect } from "react-redux";
import { Container, Header, Segment } from "semantic-ui-react";
import IssuesMenu from "../../components/IssuesMenu";
import IssuesPanel from "../../components/IssuesPanel";
import AddIssue from "../../components/AddIssue";
import { addIssue } from "./actions";

class IssuesPage extends React.Component {
  state = { selectedItem: "issues" };

  handleSelectedMenuItemChange = item => {
    this.setState({ selectedItem: item.activeItem });
  };

  handleAddIssue = issue => {
    this.props.dispatch(addIssue(issue));
    this.setState({selectedItem: "issues"});
  };

  render = () => {
    const showIssues =
      this.state.selectedItem === "new-tab" ? (
        <AddIssue onAddIssue={this.handleAddIssue} />
      ) : (
        <IssuesPanel issues={this.props.issues}/>
      );
    return (
      <Container style={{ paddingTop: 10 }}>
        <Header as="h2">IssuesPage</Header>
        <IssuesMenu onSelectedItemChange={this.handleSelectedMenuItemChange} />
        <Segment attached="bottom">{showIssues}</Segment>
      </Container>
    );
  };
}

const mapStateToProps = state => ({
  issues: state.issuesReducer
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps)(IssuesPage);
