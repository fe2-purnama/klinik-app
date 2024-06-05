const express = require("express");
const cors = require("cors");
const session = require("express-session");
const sequelizeStore = require("connect-session-sequelize")(session.Store); // Import sequelizeStore properly
const db = require("./config/db");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const reservationRoutes = require("./routes/reservationRoutes"); // Import reservation routes

dotenv.config();

const app = express();

const sessionStore = new sequelizeStore({
  db: db,
});

const SECRET = process.env.SECRET || "hsudy27838272742836";
const PORT = process.env.PORT || 5000;

app.use(
  session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true,
    store: sessionStore, // Use sessionStore here
    cookie: {
      secure: "auto",
    },
  })
);

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());

app.use(userRoutes);
app.use(authRoutes);
app.use('/reservations', reservationRoutes); // Mount reservation routes

db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch(err => console.log("Error: " + err));

db.sync({ force: false }) // Sync the database
  .then(() => {
    console.log("Tables have been synced.");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.log("Error syncing tables: " + err));

module.exports = app;
