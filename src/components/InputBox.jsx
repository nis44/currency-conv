
import PropTypes from 'prop-types'

function InputBox({
    label,
    amount,
    onamountchange,
    oncurrencychange,
    currencyoptions = [],
    selectcurrency = "usd",
    amountdisable = false,
    currencydisable = false,
    className = "",
}) {
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountdisable}
                    value={amount}
                    onChange={(e) => onamountchange && onamountchange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectcurrency}
                    onChange={(e) => oncurrencychange && oncurrencychange(e.target.value)}
                    disabled={currencydisable}
                >
                    {currencyoptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

InputBox.propTypes = {
    label: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    onamountchange: PropTypes.func,
    oncurrencychange: PropTypes.func,
    currencyoptions: PropTypes.arrayOf(PropTypes.string),
    selectcurrency: PropTypes.string,
    amountdisable: PropTypes.bool,
    currencydisable: PropTypes.bool,
    className: PropTypes.string,
}

export default InputBox;
