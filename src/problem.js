import React, { useState } from "react";

const GrandChild = (props) => {
  return (
    <div>
      <h3>Grandchild :</h3>
      <Child brandName={props.brandName} />
    </div>
  );
};

const Child = (props) => {
  return <h2>Child : {props.brandName}</h2>;
};

const App = () => {
  const [brand] = useState("amazon");

  return (
    <div>
      <h1>Hello !</h1>
      <GrandChild brandName={brand} />
    </div>
  );
};

export default App;
