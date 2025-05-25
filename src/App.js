import { useState, useEffect } from "react";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css';

import HeadNavbar from "./components/navbar/HeadNavbar.js";
import Home from "./pages/Home.js";

function App() {
  const [coins, setCoins] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets", {
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 20,
        page: 1,
        sparkline: false,
      },
    })
      .then(response => setCoins(response.data))
      .catch(error => console.error(error));
  }, []);

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <HeadNavbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Home coins={coins} filteredCoins={filteredCoins} searchTerm={searchTerm} />
    </>
  );
}

export default App;
