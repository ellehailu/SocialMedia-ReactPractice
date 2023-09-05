import React from "react";
import Feed from "./Feed";
import Header from "./Header";
import Suggested from "./Suggested";
import CurrentUser from "./CurrentUser";


function App(){
  return (
    <React.Fragment>
      
      <Header />
      <CurrentUser />
      <Feed />
      <Suggested />

    </React.Fragment>
  )
}

export default App;