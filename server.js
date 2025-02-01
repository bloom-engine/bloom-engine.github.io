const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(express.static(path.join(__dirname, '')));

// Fallback route for unmatched requests
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});
app.get('/pricing', (req, res) => {
    res.sendFile(path.join(__dirname, 'pricing.html'));
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'dashboard.html'));
});
app.get('/payments', (req, res) => {
    res.sendFile(path.join(__dirname, 'payments.html'));
});
app.get('/terms-and-conditions', (req, res) => {
    res.sendFile(path.join(__dirname, 'terms-and-conditions.html'));
});
app.get('/privacy-policy', (req, res) => {
    res.sendFile(path.join(__dirname, 'privacy-policy.html'));
});
app.get('/refund-policy', (req, res) => {
    res.sendFile(path.join(__dirname, 'refund-policy.html'));
});
app.get('/cookie-policy', (req, res) => {
    res.sendFile(path.join(__dirname, 'cookie-policy.html'));
});
app.get('/sign-in', (req, res) => {
    res.sendFile(path.join(__dirname, 'sign-in.html'));
});
app.get('/sign-up', (req, res) => {
    res.sendFile(path.join(__dirname, 'sign-up.html'));
});
app.get('/password-reset', (req, res) => {
    res.sendFile(path.join(__dirname, 'password-reset.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
