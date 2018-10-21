import React from "react";
import ElementsWrapper from "../../hoc/ElementsWrapper";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/Sidedrawer";

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSideDrawer: false
    };

    this.onBackdropClick = () => {
      this.setState({ showSideDrawer: false });
    };

    this.toggleHandler = () => {
      this.setState(prevState => {
        return { showSideDrawer: !prevState.showSideDrawer };
      });
    };
  }

  render() {
    return (
      <ElementsWrapper>
        <SideDrawer
          show={this.state.showSideDrawer}
          onBackdropClick={this.onBackdropClick}
        />
        <div style={{ marginBottom: "4rem" }} />
        <Toolbar toggleHandler={this.toggleHandler} />
        {/* <div>ToolBar , SideBar , Backdrop</div> */}
        <main>{this.props.children}</main>
      </ElementsWrapper>
    );
  }
}

export default Layout;
