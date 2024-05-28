import React from "react";
import BroadcastDetail from "./components/BroadcastDetail";
import "./styles/main.css";

interface AppProps {
  campaignKey: string;
}

const App = ({ campaignKey }: AppProps) => {

  return (
    <div>
      <BroadcastDetail campaignKey={campaignKey} />
    </div>
  );
};

export default App;
