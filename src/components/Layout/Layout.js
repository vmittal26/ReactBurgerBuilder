import React from "react";
import ElementsWrapper from "../../hoc/ElementsWrapper";
import BurgerBuilder from "../../container/BurgerBuilder/BurgerBuilder";

const Layout = props => (
  <ElementsWrapper>
    <div>ToolBar , SideBar , Backdrop</div>
    <main>
      <BurgerBuilder />
    </main>
  </ElementsWrapper>
);

export default Layout;
