import { useEffect, useState } from "react";
import axios from "axios"
import { Container, ListGroup } from "react-bootstrap";

function Home() {
    const [coins, setCoins] = useState([]);

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

    return (
        <>
            <Container className="mt-5">
                <h2>Cryptocurrency Prices</h2>
                <p className="text-secondary">The global cryptocurrency data on Cyrptoscope. <a href="/exchanges">See cyrpto exchanges.</a></p>
            </Container>
            <Container>
                <div className="row">
                    <p className="col-6 mb-0 text-secondary">Coin</p>
                    <p className="col mb-0 text-secondary">Price</p>
                    <p className="col mb-0 text-secondary">24h</p>
                    <p className="col mb-0 text-secondary">24h Volume</p>
                    <p className="col-2 mb-0 text-secondary">Market Cap</p>
                </div>
                <hr className="mt-2 mb-3 w-100 text-secondary"></hr>
                <ListGroup>
                    {coins.map(coin => (
                        <div key={coin.id}>
                            <ListGroup.Item className="p-2 border-0 " >
                                <div className="row">
                                    <div className="col-6 d-flex align-items-center">
                                        <img src={coin.image} alt="coin-logo" style={{ width: "25px", height: "25px", marginRight: "10px" }} />
                                        <p className="mb-0 mr-2" style={{ fontWeight: "bold" }}>{coin.name}</p>
                                        <small className="mb-0 mx-2 text-secondary">{coin.symbol.toUpperCase()}</small>
                                    </div>
                                    <p className="col mb-0">
                                        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(coin.current_price)}
                                    </p>
                                    <p className="col mb-0 d-flex align-items-center" style={{ color: coin.price_change_percentage_24h > 0 ? 'green' : (coin.price_change_percentage_24h < 0 ? 'red' : 'black') }}>
                                        {coin.price_change_percentage_24h > 0 ? (
                                            <i className="bi bi-caret-up-fill" style={{ fontSize: "12px", marginRight: "5px" }}></i>
                                        ) : coin.price_change_percentage_24h < 0 ? (
                                            <i className="bi bi-caret-down-fill" style={{ fontSize: "12px", marginRight: "5px" }}></i>
                                        ) : null}
                                        {coin.price_change_percentage_24h.toFixed(2)}%
                                    </p>
                                    <p className="col mb-0">
                                        none
                                    </p>
                                    <p className="col-2 mb-0">
                                        <small>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(coin.market_cap)}</small>
                                    </p>
                                </div>
                            </ListGroup.Item>
                            <hr className="text-secondary"></hr>
                        </div>

                    ))}
                </ListGroup>
            </Container>
        </>
    )
}

export default Home