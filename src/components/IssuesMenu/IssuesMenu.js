import React from "react";
import "./IssuesMenu.css";
import { Icon, Menu } from "semantic-ui-react";

class IssuesMenu extends React.Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.props.onSelectedItemChange({ activeItem: name });
  };

  render = () => {
    const { activeItem } = this.state;
    return (
      <Menu attached="top">
        <Menu.Item
          name="issues"
          active={activeItem === "issues"}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
          <div className="ui right aligned category search item">
            <div className="ui transparent icon input">
              <input
                className="prompt"
                type="text"
                placeholder="Search all issues"
              />
              <i className="search link icon" />
            </div>
            <div className="results" />
          </div>
          <Menu.Item
            name="new-tab"
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
