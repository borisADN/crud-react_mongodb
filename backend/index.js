import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import route from "./Routes/userRoute.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB

const PORT = process.env.PORT || 3000;
const URL = process.env.MONGOURL;

mongoose
  .connect(URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(error => {
    console.log(error);
  });
app.use("/api", route);

// mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log('Connected to MongoDB');
//         // Démarrer le serveur uniquement après une connexion réussie à MongoDB
//         app.listen(PORT, () => {
//             console.log(`Server running on port ${PORT}`);
//         });
//     })
//     .catch((error) => {
//         console.error('Error connecting to MongoDB:', error);
//     });
