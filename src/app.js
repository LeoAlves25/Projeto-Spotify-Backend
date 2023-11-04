import express from "express";

import bodyParser from "body-parser";

import faqRoutes from "./routes/faqRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import playlistRoutes from "./routes/playlistRoutes.js";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/faq", faqRoutes);
app.use("/user", userRoutes);
app.use("/playlist", playlistRoutes);

app.listen(3000, () => {
  console.log("Server está rodando da porta 3000");
});
