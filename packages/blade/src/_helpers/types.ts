import type { ColorContrast } from '../tokens/theme/theme.d';

/**
 * @template TokenType token type generic
 * @description Tokenises objects to dot notation strings, eg: `surface.text.normal.lowContrast`
 */
type DotNotationColorStringToken<TokenType> = {
  [K in keyof TokenType]: `${Extract<K, number | string>}.${TokenType[K] extends Record<
    string,
    ColorContrast | string
  >
    ? Extract<keyof TokenType[K], number | string>
    : DotNotationColorStringToken<TokenType[K]>}`;
}[keyof TokenType];

export { DotNotationColorStringToken };
