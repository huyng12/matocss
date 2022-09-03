import { generateCSSForAtomicRule, generateNewCSSForOldRule } from "./generate";
import { parseCSS } from "./parse";
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
  const atomicClassDeclarationCode: string[] = [];
  const oldClassWithCompositionCode: string[] = [];

  const rules = parseCSS(source);
  for (const rule of rules) {
    if (rule.selector.indexOf(" ") !== -1) {
      // Composition is only allowed when selector is single
      // TODO: Find a solution to deal with this case
      continue;
    }

    const classNames: string[] = [];

    for (const property of rule.properties) {
      const atomicClassName = transformProperty(property);
      classNames.push(atomicClassName);

      if (!generatedAtomicClassNames.has(atomicClassName)) {
        generatedAtomicClassNames.add(atomicClassName);
        atomicClassDeclarationCode.push(
          generateCSSForAtomicRule(atomicClassName, property)
        );
      }
    }

    oldClassWithCompositionCode.push(
      generateNewCSSForOldRule(rule.selector, classNames)
    );
  }

  const code = [...atomicClassDeclarationCode, ...oldClassWithCompositionCode];
  return code.join("\n");
};
