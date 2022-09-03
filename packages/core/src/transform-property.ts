import { CSSProperty } from "./type";

type TransformPropertyFunc = (cssProperty: CSSProperty) => string;

// Transform CSS property to Atomic CSS name
// Example: `background-color: red` will be transformed to `bg-red`
export const transformProperty: TransformPropertyFunc = (cssProperty) => {
  const normalizedValue = cssProperty.value.replaceAll(" ", "__");
  return `${cssProperty.prop}-[${normalizedValue}]`;
};
