const express = require("express");
const cors = require("cors");
const session = require("express-session");
const sequelizeStore = require("connect-session-sequelize");
const db = require("./config/db");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

const app = express();

const sessionStore = sequelizeStore(session.Store);
const store = new sessionStore({
  db: db,
});

const SECRET = process.env.SECRET || "hsudy27838272742836";
const PORT = process.env.PORT || 5000;

app.use(
  session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: "auto",
    },
  })
);

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());

app.use(userRoutes);
app.use(authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
