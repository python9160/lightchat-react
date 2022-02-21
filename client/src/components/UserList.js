import { Component } from "react";
import { AvatarName } from "./Message";

class UserList extends Component {
  /**
   * renders the list of <AvatarName /> components
   * @returns {JSX.Element}
   */

  render() {
    return (
      <div className="UserList">
        {
          this.props.users.map((user, index) => <AvatarName key={index} name={user.name} avatarSrc={user.avatarSrc} />)
        }
      </div>
    );
  }
}

export default UserList;