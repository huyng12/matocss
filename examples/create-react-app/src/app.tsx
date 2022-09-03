import React from "react";
import { Button } from "./button";
import s from "./app.module.css";

function App() {
  return (
    <div>
      <p className={s.p}>Hello World</p>
      <Button />
    </div>
  );
}

export default App;
