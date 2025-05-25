import { useState } from "react";
import { Container, ListGroup, Row, Col, Card } from "react-bootstrap";

import "./Module.Home.css"

function Home({ coins, filteredCoins, searchTerm }) {

    const [hoveredCoin, setHoveredCoin] = useState("")

    if (!coins) return <p>Loading...</p>;
    return (
        <>
            {searchTerm &&
                <Row className="mt-3" style={{ width: "800px", justifyContent: "flex- end", marginLeft: "auto", marginRight: "300px" }}>
                    <Col md={5} style={{ maxHeight: "400px", overflowY: "auto" }}>
                        <ListGroup>
                            <small className="mb-0">Cryptocurrencies</small>
                            <hr className="mt-1"></hr>
                            {filteredCoins.length === 0 && (
                                <ListGroup.Item>Your search did not match any records.</ListGroup.Item>
                            )}

                            {filteredCoins.map((coin) => (
                                <ListGroup.Item
                                    key={coin.id}
                                    action
                                    onMouseEnter={() => setHoveredCoin(coin)}
                                    style={{ cursor: "pointer", borderRadius: "5px" }}
                                    className="border-0"
                                    id="item"
                                >
                                    <div className="d-flex align-items-center">
                                        <img
                                            src={coin.image}
                                            alt={coin.name}
                                            style={{ width: 20, height: 20, marginRight: 10 }}
                                        />
                                        {coin.name} <small className="mb-0 mx-2 text-secondary">{coin.symbol.toUpperCase()}</small>
                                    </div>

                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>

                    <Col md={7}>
                        {hoveredCoin ? (
                            <Card style={{ borderRadius: "0px", borderTop: "0px", borderBottom: "0px", borderRight: "0px", borderLeft: "1px solid rgb(211, 211, 211)" }}>
                                <Card.Body>
                                    <Card.Title>
                                        <img
                                            src={hoveredCoin.image}
                                            alt={hoveredCoin.name}
                                            style={{ width: 30, height: 30, marginRight: 10 }}
                                        />{hoveredCoin.name} <small className="mb-0 mx-2 text-secondary">{hoveredCoin.symbol.toUpperCase()}</small><small style={{ color: "#474747", fontSize: "15px" }}>statistics</small>
                                        <hr className="mt-1 mb-1"></hr>
                                    </Card.Title>
                                    <Card.Text>
                                        <strong>Price:</strong>{" "}
                                        {new Intl.NumberFormat("en-US", {
                                            style: "currency",
                                            currency: "USD",
                                        }).format(hoveredCoin.current_price)}
                                        <br />
                                        <strong>24h Change:</strong>{" "}
                                        <span
                                            style={{
                                                color:
                                                    hoveredCoin.price_change_percentage_24h > 0
                                                        ? "green"
                                                        : "red",
                                            }}
                                        >
                                            {hoveredCoin.price_change_percentage_24h.toFixed(2)}%
                                        </span>
                                        <br />
                                        <strong>24h Volume:</strong>{" "}
                                        {new Intl.NumberFormat("en-US").format(
                                            hoveredCoin.total_volume
                                        )}
                                        <br />
                                        <strong>Market Cap:</strong>{" "}
                                        {new Intl.NumberFormat("en-US", {
                                            style: "currency",
                                            currency: "USD",
                                        }).format(hoveredCoin.market_cap)}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        ) : (
                            <p>Hover over a coin to see details.</p>
                        )}
                    </Col>
                </Row >
            }

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