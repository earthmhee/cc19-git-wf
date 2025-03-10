const express = require("express");
const authRoute = require("./routes/auth-route");
const app = express();

app.use("/auth", authRoute);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server on port ${port}`))

