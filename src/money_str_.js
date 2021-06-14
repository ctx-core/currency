import { comma_number_str_, isNumber } from '@ctx-core/number';
/**
 * Formats money value with commas (no currency type)
 */
export function money_str_(amount, params) {
    const digits = isNumber(params && params.digits)
        ? (params && params.digits)
        : 2;
    return (amount == undefined
        ? undefined
        : comma_number_str_(amount.toFixed(digits)));
}
export { money_str_ as _money_str, money_str_ as format__money, };
//# sourceMappingURL=src/money_str_.js.map