export interface CSSProperty {
  prop: string;
  value: string;
}

export interface CSSRule {
  selector: string;
  properties: CSSProperty[];
}

export type ParsedCSS = CSSRule[];
