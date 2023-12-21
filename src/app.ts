// server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    // ...initial items
];

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// API routes
app.get('/api/items', (req: any, res: any) => {
    res.json(items);
});

app.post('/api/items', (req: any, res: any) => {
    const newItem = req.body;
    newItem.id = items.length + 1;
    items.push(newItem);
    res.json(newItem);
});

app.put('/api/items/:id', (req: any, res: any) => {
    const itemId = parseInt(req.params.id);
    const updatedItem = req.body;
    items = items.map((item) => (item.id === itemId ? updatedItem : item));
    res.json(updatedItem);
});

app.delete('/api/items/:id', (req: any, res: any) => {
    const itemId = parseInt(req.params.id);
    items = items.filter((item) => item.id !== itemId);
    res.json({ success: true });
});

// Handle other routes by serving the React app
app.get('*', (req: any, res: any) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
