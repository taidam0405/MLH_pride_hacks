const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./config");
const userRoutes = require("./routes/user-routes");
const authRoutes = require("./routes/auth-routes");

const app = express();
app.use(express.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/user", userRoutes.routes);
app.use("/auth", authRoutes.routes);

app.listen(config.port, () =>
  console.log("Server is running on port", config.port)
);
