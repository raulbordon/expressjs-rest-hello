const express = require("express");
const connectDB = require("./database");
const app = express();

app.use(express.json());

// Aquí agregarás rutas
app.use("/users", require("./routes/user"));
app.use("/people", require("./routes/people"));
app.use("/planets", require("./routes/planet"));
app.use("/favorites", require("./routes/favorite"));

connectDB().then(() => {
  app.listen(3000, () => console.log("Server on http://localhost:3000"));
});
