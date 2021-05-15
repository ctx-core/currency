import { _currency_str } from './_currency_str'
import type { currency_str_default_params_I } from './currency_str_default_params_I'
export function _currency_str_fn(params?:currency_str_default_params_I|string) {
	return (amount:number)=>_currency_str(amount, params)
}
export {
	_currency_str_fn as _format__currency
}
