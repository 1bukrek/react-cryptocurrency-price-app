import { useEffect, useState } from "react";
import axios from "axios";

function ConverterComponent() {
    const [coins, setCoins] = useState([]);
    const [fromCoin, setFromCoin] = useState("bitcoin");
    const [amount, setAmount] = useState(1);
    const [converted, setConverted] = useState(0);

    useEffect(() => {
        axios
            .get("https://api.coingecko.com/api/v3/coins/markets", {
                params: {
                    vs_currency: "usd",
                    order: "market_cap_desc",
                    per_page: 20, // first 10 coins
                    page: 1,
                    sparkline: false,
                },
            })
            .then((response) => setCoins(response.data))
            .catch((error) => console.error(error));
    }, []);

    // conversion calculation
    useEffect(() => {
        const selectedCoin = coins.find((coin) => coin.id === fromCoin);
        if (selectedCoin) setConverted(amount * selectedCoin.current_price);
    }, [amount, fromCoin, coins]);

    return (
        <>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Miktar"
                style={{ padding: "5px", marginRight: "10px" }}
            />

            <select
                value={fromCoin}
                onChange={(e) => setFromCoin(e.target.value)}
                style={{ padding: "5px" }}
            >
                {coins.map((coin) => (
                    <option key={coin.id} value={coin.id}>
                        {coin.name}
                    </option>
                ))}
            </select>

            <h3>
                {amount} {fromCoin.toUpperCase()} ≈ ${converted.toFixed(2)}
            </h3>
        </>
    );
}

export default ConverterComponent