import "reflect-metadata"; // IMPORTANTE que esté primero
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { createConnection } from "typeorm";
import userRoutes from "./routes/userRoutes";

const app = express();
const PORT = process.env.PORT || 3001;

createConnection()
  .then(() => {
    console.log("Database connected");

    app.use(cors());
    app.use(express.json());
    app.use(morgan("dev"));

    // Rutas
    app.use("/api", userRoutes);

    app.use((req, res) => {
      res.status(404).json({ message: "Not found" });
    });

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => console.error("TypeORM connection error: ", error));
