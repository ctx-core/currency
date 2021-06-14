import { no_comma_str_ } from '@ctx-core/number';
import { currency_symbol_ } from './currency_symbol_';
/**
 * Remove currency delimiter & commas from string representing amount.
 */
export function unformat_currency_str_(amount, params) {
    var _a;
    return (amount == null
        ? (((_a = params) === null || _a === void 0 ? void 0 : _a.default) || amount)
        : (no_comma_str_(amount
            .toString()
            .replace(currency_symbol_(params), ''))));
}
export { unformat_currency_str_ as _unformat_currency_str, unformat_currency_str_ as unformat__currency, };
//# sourceMappingURL=src/unformat_currency_str_.js.map