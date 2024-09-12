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

// app.use(
//     "/admin_files_upload",
//     express.static(path.join(__dirname, "../../admin_files_upload"))
//   );
//   app.use(
//     "/product_files_upload",
//     express.static(path.join(__dirname, "../../product_files_upload"))
//   );
//   app.use(
//     "/clients_files_upload",
//     express.static(path.join(__dirname, "../../clients_files_upload"))
//   );

app.use("/customer", clientRouter);
app.use("/admin", adminRouter);

app.get("/", (res) => {
  res.json("Server working well!!! ✅");
});

app.use("/node-api", route);
//autres routes ici

export default app;
