import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const data = [
    { name: "BTC", price: 45000 },
    { name: "ETH", price: 3200 },
    { name: "BNB", price: 420 },
];

function ChartComponent() {
    return (
        <LineChart width={400} height={200} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="price" stroke="#8884d8" />
        </LineChart>
    );
}

export default ChartComponent