import express from "express";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";
import route from "./routes/auth.routes.js";
import authRouter from "./routes/auth.routes.js";
import adminRouter from "./routes/admin.routes.js"
const app = express();

//middelwares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(compression());
app.use(morgan("dev"));

app.use("/auth", authRouter);
app.use("/product", adminRouter);

app.get("/", (res) => {
    res.json("Server working well!!! ✅");
});

app.use("/node-api", route);
//autres routes ici

export default app;