import React from "react";
import "./IssuesMenu.css";
import { Icon, Menu, Responsive, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";

class IssuesMenu extends React.Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.props.onSelectedItemChange({ activeItem: name });
  };

  render = () => {
    const { activeItem } = this.state;

    const searchBar = () => (
      <div className="ui right aligned category search item">
        <div className="ui transparent icon input">
          <input
            className="prompt"
            type="text"
            placeholder="Search all issues"
          />
          <i className="search link icon" />
        </div>
      </div>
    );

    return (
      <Menu attached="top">
        <Menu.Item
          name="issues"
          as={Link}
          to="/issues"
          active={activeItem === "issues"}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
          <Responsive as={searchBar} minWidth={768} />
          <Menu.Item
            name="new-tab"
            as={Link}
            to="/add"
            active={activeItem === "new-tab"}
            onClick={this.handleItemClick}
          >
            <Icon name="add" />
            New Issue
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  };
}

export default IssuesMenu;
