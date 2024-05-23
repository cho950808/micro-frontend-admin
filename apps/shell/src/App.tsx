import React from "react";
import ReactDOM from "react-dom";

import "@micro-frontend-admin/ui-kit/index.css";
import { Button, Icon } from "@micro-frontend-admin/ui-kit";

const App = () => (
  <div className="container">
    <div>Name: shell</div>

    
    <div>
      <p>
        ui-kit
      </p>
      <Button>Hello</Button>
      <Icon.Briefcase />
    </div>
  </div>
);


ReactDOM.render(<App />, document.getElementById("app"));
