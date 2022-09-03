import { ChildNode, Rule, Declaration } from "postcss";

export const isRule = (node: ChildNode): node is Rule => node.type === "rule";

export const isDeclaration = (node: ChildNode): node is Declaration =>
  node.type === "decl";
