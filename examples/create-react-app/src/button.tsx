import React, { useState } from "react";
import s from "./button.module.css";

export const Button = (): JSX.Element => {
  const [count, setCount] = useState(0);
  const onClick = () => setCount((count) => count + 1);

  return (
    <button className={s.button} onClick={onClick}>
      Count: {count}
    </button>
  );
};
