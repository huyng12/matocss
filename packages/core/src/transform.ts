import { parse } from "postcss";
import { generateNewCSSForOldRule } from "./generate-css";
import { isDeclaration, isRule } from "./postcss-utils";
import { transformProperty } from "./transform-property";

interface Params {
  source: string;
  generatedAtomicClassNames: Set<string>;
}

type TransformFunc = (params: Params) => string;

export const transform: TransformFunc = ({
  source,
  generatedAtomicClassNames,
}) => {
  const root = parse(source);

  const code: string[] = [];

  const rules = root.nodes.filter(isRule);
  for (const rule of rules) {
    const selector = rule.selector;
    const classNames: string[] = [];

    const decls = rule.nodes.filter(isDeclaration);
    for (const decl of decls) {
      const className = transformProperty(decl.prop, decl.value);
      classNames.push(className);
    }

    const css = generateNewCSSForOldRule(selector, classNames);
    code.push(css);
  }

  return code.join("\n");
};
