import { CSSProperty } from "./type";

type GenerateCSSForAtomicRuleFunc = (
  className: string,
  cssProperty: CSSProperty
) => string;

export const generateCSSForAtomicRule: GenerateCSSForAtomicRuleFunc = (
  className,
  cssProperty
) => {
  const normalizedClassName = className.replaceAll(/[\[\]]/g, "\\$&");
  return `:global(.${normalizedClassName}) {
    ${cssProperty.prop}: ${cssProperty.value};
  }`;
};

type GenerateNewCSSForOldRuleFunc = (
  selector: string,
  classNames: string[]
) => string;

export const generateNewCSSForOldRule: GenerateNewCSSForOldRuleFunc = (
  selector,
  classNames
) => {
  return `${selector} {
    composes: ${classNames.join(" ")} from global;
  }`;
};
