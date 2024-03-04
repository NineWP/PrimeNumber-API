const express = require('express');
const app = express();
const port = 3000;

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

app.get('/is_prime/:number', (req, res) => {
    const number = parseInt(req.params.number);

    if (isNaN(number)) {
        return res.status(400).json({ error: 'Invalid number' });
    }

    const result = isPrime(number);

    res.send(result.toString());
});

const server = app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

module.exports = { isPrime, server };
