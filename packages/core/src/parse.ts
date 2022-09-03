import { parse, Root } from "postcss";
import { isDeclaration, isRule } from "./postcss-utils";
import { CSSProperty, ParsedCSS } from "./type";

type NormalizePostCSSRootFunc = (root: Root) => ParsedCSS;

const normalizePostCSSRoot: NormalizePostCSSRootFunc = (root) => {
  return root.nodes.filter(isRule).map((node) => ({
    selector: node.selector,
    properties: node.nodes
      .filter(isDeclaration)
      .map((node): CSSProperty => ({ prop: node.prop, value: node.value })),
  }));
};

type ParseCSSFunc = (source: string) => ParsedCSS;

export const parseCSS: ParseCSSFunc = (source) => {
  const root = parse(source);
  return normalizePostCSSRoot(root);
};
