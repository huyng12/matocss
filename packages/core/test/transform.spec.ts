import { test, expect } from "vitest";
import { transform } from "../src/transform";

test("transform css modules to enable atomic", () => {
  const generatedAtomicClassNames = new Set<string>();
  const source = `
    .container {
      color: white;
      background-color: red;
    }
  `;
  const css = transform({ source, generatedAtomicClassNames });
  expect(css).toMatchSnapshot();
});
