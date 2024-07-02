const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

// Parse URL and json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Public folder
app.use(express.static('public'));

// apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Start the server on the port
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
