import { process } from "@matocss/core";

function loader(source: string) {
  return process(source);
}

export default loader;
