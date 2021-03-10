//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom";

const name = "sujay";
const num = 46;

ReactDOM.render(
  <div>
    <h1>Project to create lists:</h1>
    <ul>
      <li>Pizza</li>
      <li>burger</li>
      <li>rice</li>
    </ul>
    <ol>
      <li>apple</li>
      <li>bannana</li>
      <li>mango</li>
    </ol>
    <h1>Project to output variables:</h1>
    <p>
      hello my name is {name} and my lucky number is {num}!
    </p>
  </div>,
  document.getElementById("root")
);
