import { transform } from "./transform";

const generatedAtomicClassNames: Set<string> = new Set();

export const process = (source: string): string => {
  return transform({ source, generatedAtomicClassNames });
};
