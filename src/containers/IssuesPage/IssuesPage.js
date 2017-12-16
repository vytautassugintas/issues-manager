import React from "react";
import { connect } from "react-redux";
import { Container, Header, Segment } from "semantic-ui-react";
import IssuesMenu from "../../components/IssuesMenu";

class IssuesPage extends React.Component {

  handleSelectedMenuItemChange = item => {
    
  }

  render = () => {
    return (
      <Container style={{ paddingTop: 10 }}>
        <Header as="h2">IssuesPage</Header>
        <IssuesMenu onSelectedItemChange={this.handleSelectedMenuItemChange}/>
        <Segment attached="bottom">

        </Segment>
      </Container>
    );
  };
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(IssuesPage);
