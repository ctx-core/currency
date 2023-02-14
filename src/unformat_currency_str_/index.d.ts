import type { nullish } from '@ctx-core/function'
import type { currency_str__default_params_T } from '../_types'
export declare function unformat_currency_str_(
	amount:string|number|nullish,
	params?:currency_str__default_params_T|string
):string|null
export {
	unformat_currency_str_ as _unformat_currency_str,
	unformat_currency_str_ as unformat__currency,
}
