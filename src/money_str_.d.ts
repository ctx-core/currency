import type { nullish } from '@ctx-core/function';
import type { money_str_params_I } from './money_str_params_I';
/**
 * Formats money value with commas (no currency type)
 */
export declare function money_str_(amount: number, params?: money_str_params_I): string | nullish;
export { money_str_ as _money_str, money_str_ as format__money, };
