const express = require('express');
const indexRoutes = require('./routes/indexRoutes');
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: '*', // Allow only this origin
    methods: 'GET,POST,PATCH,DELETE',          // Allow only GET and POST methods
    allowedHeaders: 'Content-Type,Authorization', // Allow only these headers
};
app.use(cors(corsOptions));

app.use(express.json());

app.use(indexRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});