import express from "express";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";
import route from "./routes/client.routes.js";
import clientRouter from "./routes/client.routes.js";
import adminRouter from "./routes/admin.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(compression());
app.use(morgan("dev"));

app.use("/customer", clientRouter);
app.use("/admin", adminRouter);

app.get("/", (res) => {
    res.json("Server working well!!! ✅");
});

app.use("/node-api", route);
//autres routes ici

export default app;