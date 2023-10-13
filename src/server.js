const express = require('express');
const { Client } = require('pg');
const app = express();
const PORT = 3001;
const cors = require('cors');
// ...
app.use(cors());
const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: '123',
    database: 'postgres'
});

client.connect();

app.use(express.json()); // Middleware to parse JSON requests

app.post('/api/submit', (req, res) => {
    const { name, phoneNumber, email, vehicleType, service, otherService } = req.body;

    const query = 'INSERT INTO techtune (name, email, phone_number, vehicle_type, service, other_service) VALUES ($1, $3, $2, $4, $5, $6)';
    const values = [name, phoneNumber, email, vehicleType, service, otherService];

    client.query(query, values, (err, result) => {
        if (!err) {
            res.status(200).json({ message: 'Data inserted successfully' });
        } else {
            console.error(err.message);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
