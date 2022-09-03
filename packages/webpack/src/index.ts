import { transform } from "@matocss/core";

const generatedAtomicClassNames: Set<string> = new Set();

function loader(source: string) {
  return transform({ source, generatedAtomicClassNames });
}

export default loader;
