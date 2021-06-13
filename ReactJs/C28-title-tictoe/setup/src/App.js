import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);

  return (
    <div className="container">
      reminder project setup
      <List people={people}/>
    </div>
  );
}

export default App;
