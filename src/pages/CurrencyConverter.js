import { Container } from "react-bootstrap"

import ConverterComponent from "../components/converter/ConverterComponent.js"

function CurrencyConverter() {
    return (
        <>
            <Container className="mt-5">
                <h2>Currency Converter</h2>
                <small className="text-secondary">Cryptoscope currency data. Check the latest cryptocurrency prices against all global currencies.</small>
            </Container>

            <Container className="mt-2">
                <ConverterComponent />
            </Container>
        </>
    )
}

export default CurrencyConverter