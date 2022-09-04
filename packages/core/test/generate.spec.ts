import { test, expect } from "vitest";
import { CSSProperty } from "../src/type";
import {
  generateCSSForAtomicRule,
  generateNewCSSForOldRule,
} from "../src/generate";

test("generate css for atomic rule", () => {
  const className = "bg-red";
  const cssProperty: CSSProperty = { prop: "background-color", value: "red" };
  const css = generateCSSForAtomicRule(className, cssProperty);
  expect(css).toEqual(`:global(.bg-red) {
    background-color: red;
  }`);
});

test("generate css by combining atomic class", () => {
  const selector = ".container";
  const classNames = ["p-5", "bg-red", "text-white"];
  const css = generateNewCSSForOldRule(selector, classNames);
  expect(css).toEqual(`.container {
    composes: p-5 bg-red text-white from global;
  }`);
});
