document.getElementById('review-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const review = document.getElementById('review').value;
    const date = document.getElementById('date').value;

    const data = {
        name,
        rating,
        review,
        date
    };

    const response = await fetch('/submit-review', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();
    if (result.success) {
        document.getElementById('review-message').innerText = "Thank you for your review!";
        document.getElementById('review-form').reset();
    } else {
        document.getElementById('review-message').innerText = "Something went wrong. Please try again.";
    }
});
