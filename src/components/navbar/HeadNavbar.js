import { Navbar, Container, Nav } from "react-bootstrap";

function HeadNavbar() {
    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="/">Cyrptoscope</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/cyrptocurrencies">Cyrpto Currencies</Nav.Link>
                        <Nav.Link href="/exchanges">Exchanges</Nav.Link>
                        <Nav.Link href="/currency-converter">Currency Converter</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default HeadNavbar