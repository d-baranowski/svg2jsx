export interface ConfigType {
  type: 'functional' | 'class';
  jsxSingleQuote: boolean;
}

declare const transform: (svg: string, config: ConfigType) => Promise<string>;

export default transform;
