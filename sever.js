const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

let reviews = []; // In-memory storage for reviews, replace with DB in production

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files (HTML, CSS, JS)

// Endpoint to submit a review
app.post('/submit-review', (req, res) => {
    const { name, rating, review, date } = req.body;

    if (!rating || !review || !date) {
        return res.json({ success: false, message: 'Missing required fields.' });
    }

    reviews.push({
        name: name || 'Anonymous',
        rating,
        review,
        date
    });

    res.json({ success: true });
});

// Endpoint to retrieve all reviews (optional feature)
app.get('/reviews', (req, res) => {
    res.json(reviews);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
